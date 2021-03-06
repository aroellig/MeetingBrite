json.rsvp do
  json.partial! '/api/rsvps/rsvp', rsvp: @rsvp
end

json.user do 
    json.partial! 'api/users/user', user: @rsvp.user
end

json.event do
    json.partial! 'api/events/event', event: @rsvp.event 
end