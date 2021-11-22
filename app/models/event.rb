class Event < ApplicationRecord
    validates :title, :description, :capacity, :location, :date, presence: true

    has_one :creator, 
    foreign_key: :username,
    class_name: 'Creator'
end
