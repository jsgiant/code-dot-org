class AdminStandardsController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin

  def index
    @scripts_for_standards = Script.scripts_for_standards
  end

  def import_standards
    @script = Script.find_by_name(params["stage_name"])

    code_studio_stages = {}
    @script&.stages&.each do |stage|
      code_studio_stages[stage.localized_name] = stage
    end

    curriculum_builder_lessons = params["lessons"]

    curriculum_builder_lessons&.each do |lesson|
      stage = code_studio_stages[lesson["title"]]
      lesson["standards"].each do |standard|
        code_studio_standard =
          Standard.find_by(
            {
              organization: standard["framework"],
              organization_id: standard["shortcode"]
            }
          )
        stage.standards << code_studio_standard
        stage.save!
      end
    end
  end
end
