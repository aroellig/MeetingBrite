class Event < ApplicationRecord
    validates :title, :description, :capacity, :location, :date, :creator_id, presence: true

    has_one_attached :photo

    belongs_to :creator, 
    foreign_key: :creator_id,
    class_name: 'User'

    has_many :reviews, 
    foreign_key: :event_id,
    class_name: 'Review'

    has_many :rsvps,
    foreign_key: :user_id,
    class_name: 'Rsvp'


end
