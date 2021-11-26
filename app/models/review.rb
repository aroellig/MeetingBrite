class Review < ApplicationRecord
    validate :rating, :review
    
    
    belongs_to :event, 
    foreign_key: :event_id,
    class_name: 'Event'

    belongs_to :user, 
    foreign_key: :user_id,
    class_name: 'User'
end
