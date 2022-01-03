Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :events
    resources :reviews
    resources :rsvps
  end
  root to: 'static_pages#root'
end
