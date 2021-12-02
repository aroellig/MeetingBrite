class Rsvp < ApplicationRecord
    validate :attendee_name, :num_attendees

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    belongs_to :event,
    foreign_key: :event_id,
    class_name: 'Event'
end
