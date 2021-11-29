class Review < ApplicationRecord
    validate :review, :rating inclusion: { in: (1..10) }
    
    
    belongs_to :event, 
    foreign_key: :event_id,
    class_name: 'Event'

    belongs_to :user, 
    foreign_key: :user_id,
    class_name: 'User'
end
