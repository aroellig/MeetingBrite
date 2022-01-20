@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :review, :rating, :user_id, :event_id
  end
end
