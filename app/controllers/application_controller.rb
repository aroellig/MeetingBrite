class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token
    before_action :underscore_params!
  
    helper_method :current_user, :logged_in?
  
    private

    def underscore_params!
      params.instance_variable_get(:@parameters).deep_transform_keys!(&:underscore)
    end
  
    def current_user
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def logged_in?
      !!current_user
    end
  
    def login(user)
      user.reset_session_token!
      session[:session_token] = user.session_token
      @current_user = user
    end
  
    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end
  
    def require_logged_in
      unless current_user
        render json: { base: ['invalid credentials'] }, status: 401
      end
    end
end
