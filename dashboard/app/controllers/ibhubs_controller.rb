class IbhubsController < ApplicationController
   # Renders Custom template

  def ib
    user_id = params[:user_id] # query parameter
    @access_token = user_id
    flash.alert = "params - #{@access_token }"
    render template: 'ib/ibhubs'
  end

  # should sign into the application with path/query params

  def signin
    data = params[:access_token] # path parameter
    @access_token = data
    flash.alert = "params - #{@access_token}"
    # Rails.logger.debug "access_token - #{access_token}"
    render template: 'ib/ibhubs'
  end  
end
