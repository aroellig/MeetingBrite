class Api::RsvpsController < ApplicationController
    before_action :require_logged_in

    def show
        @rsvp = RSVP.find(params[:id]);
        render :show
      end
    
    def create 
      @rsvp = current_user.rsvps.new(rsvp_params)
      if @rsvp.save
          render :show
          else
            render json: @rsvp.errors.full_messages, status: 422
      end
    end
      
    def index 
      @rsvps = Rsvp.all
      render :index
    end

    def destroy
      @rsvp = Rsvp.find(params[:id])
      @rsvp.destroy
  
      render :show
    end

    private 
    def rsvp_params
        params.require(:rsvp).permit(:user_id, :event_id, :attendee_name, :num_attendees)
    end
end
