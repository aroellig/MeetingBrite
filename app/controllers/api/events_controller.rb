class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create]


    def show
      @event = Event.find(params[:id]);
      render :show
    end
  
    def create
      debugger
      @event = Event.new(event_params)
      if @event.save
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end
      
    def index 
      @events = Event.all
      render :index
    end

    def update
      @event = Event.find_by(id: params[:id])
      if @event.update(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 422
      end
    end
    
    def destroy
      @event = Event.find(params[:id])
      @event.destroy
  
      render :show
    end
    
    private
  
    def event_params
      debugger
      params.require(:event).permit(:title, :description, :capacity, :location, :date, :creator_id, :photo)
    end
end
