class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def show
        @review = current_user.reviews.find(params[:id]);
        render :show
    end

    def index 
        event = Event.find(params[:event_id])
        @reviews = event.reviews
        render :index
    end

    def create 
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
            else
            render json: @review, status: :unprocessable_entity
        end
    end

    def update
        @review = Review.find(params[:review][:id])
        if @review.update(review_params)
          render :show
        else
          render json: @review.errors_full_messages, status:422
        end
      end

    private 
    def review_params
        params.require(:review).permit(:review, :rating, :event_id, :user_id)
    end
end
