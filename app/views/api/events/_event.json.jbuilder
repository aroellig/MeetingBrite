json.extract! event, :id, :title, :capacity, :description, :date, :location, :review_ids, :creator_id

x = event.photo.map do |photo|
        url_for(photo)
    end

json.photo do 
    json.array! x
end