class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter do
    session[:previous_url] = request.url unless request.url.include?("auth/facebook")
  end

  def after_sign_in_path_for(resource_or_scope)
    Rails.logger.debug session[:previous_url]
    if session[:previous_url].include?("iphone")
      iphone_path
    else
      root_path
    end
  end
end
