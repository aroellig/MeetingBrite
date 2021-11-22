class Event < ApplicationRecord
    validates :title, :description, :capacity, :location, :date, presence: true

    has_one :creator, 
    foreign_key: :user_id,
    class_name: 'Creator'
end
