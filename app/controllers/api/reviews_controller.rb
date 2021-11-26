class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def show
        @review = Review.find(params[:id]);
        render :show
    end

    def create 
    @review = current_user.reviews.new(review_params)
    if @review.save!
        render :show
    else
        render json: @review, status: :unprocessable_entity
    end
    end

    private 
    def review_params
        params.require(:review).permit(:review, :rating, :event_id)
    end
end
