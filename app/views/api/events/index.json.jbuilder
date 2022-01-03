@events.each do |event|
  json.set! event.id do 
    json.extract! event, :id, :title, :description, :location, :capacity, :date, :creator_id
     json.photoUrl url_for(post.photo)
  end
end


