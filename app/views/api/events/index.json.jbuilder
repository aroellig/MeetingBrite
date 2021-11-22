 @events.each do |event|
  json.extract! event, :title, :description, :location, :capacity, :date, :creator_id
end
