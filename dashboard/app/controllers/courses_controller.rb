class CoursesController < ApplicationController
  include VersionRedirectOverrider

  before_action :require_levelbuilder_mode, except: [:index, :show]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_redirect_override, only: [:show]
  authorize_resource class: 'UnitGroup', except: [:index]

  def index
    view_options(full_width: true, responsive_content: true, no_padding_container: true, has_i18n: true)
    respond_to do |format|
      format.html do
        @is_teacher = (current_user && current_user.teacher?) || params[:view] == 'teacher'
        @is_english = request.language == 'en'
        @is_signed_out = current_user.nil?
        @force_race_interstitial = params[:forceRaceInterstitial]
        @modern_elementary_courses_available = Script.modern_elementary_courses_available?(request.locale)
      end
      format.json do
        course_infos = UnitGroup.valid_course_infos(user: current_user)
        render json: course_infos
      end
    end
  end

  def show
    # csp and csd are each "course families", each containing multiple "course versions".
    # When the url of a course family is requested, redirect to a specific course version.
    #
    # For now, use hard-coded list to determine whether the given course_name is actually a course family name.
    if UnitGroup::FAMILY_NAMES.include?(params[:course_name])
      redirect_query_string = request.query_string.empty? ? '' : "?#{request.query_string}"
      redirect_to_course = UnitGroup.all_courses.
          select {|c| c.family_name == params[:course_name] && c.is_stable?}.
          sort_by(&:version_year).
          last
      redirect_to "/courses/#{redirect_to_course.name}#{redirect_query_string}"
      return
    end

    if !params[:section_id] && current_user&.last_section_id
      redirect_to "#{request.path}?section_id=#{current_user.last_section_id}"
      return
    end

    unit_group = UnitGroup.get_from_cache(params[:course_name])
    raise ActiveRecord::RecordNotFound unless unit_group

    if unit_group.plc_course
      authorize! :show, Plc::UserCourseEnrollment
      user_course_enrollments = [Plc::UserCourseEnrollment.find_by(user: current_user, plc_course: unit_group.plc_course)]
      render 'plc/user_course_enrollments/index', locals: {user_course_enrollments: user_course_enrollments}
      return
    end

    if unit_group.pilot?
      authenticate_user!
      unless unit_group.has_pilot_access?(current_user)
        render :no_access
        return
      end
    end

    # Attempt to redirect user if we think they ended up on the wrong course overview page.
    override_redirect = VersionRedirectOverrider.override_course_redirect?(session, unit_group)
    if !override_redirect && redirect_unit_group = redirect_unit_group(unit_group)
      redirect_to "/courses/#{redirect_unit_group.name}/?redirect_warning=true"
      return
    end

    sections = current_user.try {|u| u.sections.where(hidden: false).select(:id, :name, :course_id, :script_id)}
    @sections_with_assigned_info = sections&.map {|section| section.attributes.merge!({"isAssigned" => section[:course_id] == unit_group.id})}

    render 'show', locals: {unit_group: unit_group, redirect_warning: params[:redirect_warning] == 'true'}
  end

  def new
  end

  def create
    unit_group = UnitGroup.new(
      name: params.require(:course).require(:name),
      has_numbered_units: true
    )
    if unit_group.save
      redirect_to action: :edit, course_name: unit_group.name
    else
      render 'new', locals: {unit_group: unit_group}
    end
  end

  def update
    unit_group = UnitGroup.find_by_name!(params[:course_name])
    unit_group.persist_strings_and_scripts_changes(params[:scripts], params[:alternate_scripts], i18n_params)
    unit_group.update_teacher_resources(params[:resourceTypes], params[:resourceLinks])
    # Convert checkbox values from a string ("on") to a boolean.
    [:has_verified_resources, :has_numbered_units, :visible, :is_stable].each {|key| params[key] = !!params[key]}
    unit_group.update(course_params)
    redirect_to course_path(unit_group)
  end

  def edit
    unit_group = UnitGroup.find_by_name!(params[:course_name])

    # We don't support an edit experience for plc courses
    raise ActiveRecord::ReadOnlyRecord if unit_group.try(:plc_course)
    render 'edit', locals: {unit_group: unit_group}
  end

  def i18n_params
    params.permit(
      :title,
      :description_short,
      :description_student,
      :description_teacher,
      :version_title
    ).to_h
  end

  private

  def course_params
    cp = params.permit(:version_year, :family_name, :has_verified_resources, :has_numbered_units, :pilot_experiment, :visible, :is_stable, :announcements).to_h
    cp[:announcements] = JSON.parse(cp[:announcements]) if cp[:announcements]
    cp
  end

  def set_redirect_override
    if params[:course_name] && params[:no_redirect]
      VersionRedirectOverrider.set_course_redirect_override(session, params[:course_name])
    end
  end

  def redirect_unit_group(unit_group)
    # Return nil if unit_group is nil or we know the user can view the version requested.
    return nil if !unit_group || unit_group.can_view_version?(current_user)

    # Redirect the user to the latest assigned unit_group in this family, or to the latest unit_group in this family if none
    # are assigned.
    redirect_unit_group = UnitGroup.latest_assigned_version(unit_group.family_name, current_user)
    redirect_unit_group ||= UnitGroup.latest_stable_version(unit_group.family_name)

    # Do not redirect if we are already on the correct unit_group.
    return nil if redirect_unit_group == unit_group

    redirect_unit_group
  end
end
