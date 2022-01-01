json.extract! event, :id, :title, :capacity, :description, :date, :location, :review_ids, :creator_id

x = listing.photos.map do |photo|
        url_for(photo)
    end

json.photos do 
    json.array! x
end