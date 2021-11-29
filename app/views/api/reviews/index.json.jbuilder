@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :title, :description, :location, :capacity, :date, :creator_id
  end
end
