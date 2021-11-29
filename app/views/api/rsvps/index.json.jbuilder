@rsvps.each do |rsvp|
  json.set! rsvp.id do 
    json.extract! rsvp, :id, :event_id, :user_id, :attendee_name
  end
end