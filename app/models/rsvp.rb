class Rsvp < ApplicationRecord
    validates :user_id, :event_id

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    belongs_to :event,
    foreign_key: :event_id,
    class_name: 'Event'
end
