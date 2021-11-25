class Event < ApplicationRecord
    validates :title, :description, :capacity, :location, :date, :creator_id, presence: true

    belongs_to :creator, 
    foreign_key: :creator_id,
    class_name: 'User'

    has_many :rsvps,
    through :rsvps,
    source: :user 
end
