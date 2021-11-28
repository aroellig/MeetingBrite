class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def show
        @review = current_user.reviews.find(params[:id]);
        render :show
    end

    def new
        @review = Review.new
        @user = User.new
        @user = User.find_by id: params["user_id"]
      end

    def create 
    @review = current_user.reviews.new(review_params)
    if @review.save
        render :show
    else
        render json: @review, status: :unprocessable_entity
    end
    end

    private 
    def review_params
        params.require(:review).permit(:review, :rating, :event_id, :user_id)
    end
end
