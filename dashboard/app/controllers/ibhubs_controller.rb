class IbhubsController < ApplicationController
   # Renders Custom template

  def ib
    user_id = params[:user_id] # query parameter
    @access_token = user_id
    flash.alert = "user id - #{user_id}"

    render template: 'ibhubs/ibhubs'
  end

  # should sign into the application with path/query params

  def update
    user_id = params[:user_id] # path parameter
    access_token = params[:access_token]
    @access_token = access_token
    if Person.exists?(id:user_id)
      @person = Person.find(user_id)
      @person.update_details(access_token)
      flash.alert = "access_token - #{@access_token}"
      # Rails.logger.debug "access_token - #{access_token}"
      render template: 'ibhubs/ibhubs'
    else
      respond_to do |format|
        format.html {render template: 'errors/not_found', layout: 'layouts/application', status: :not_found}
        format.all {head :not_found, content_type: 'text/html'}
      end
    end
  end  
end
