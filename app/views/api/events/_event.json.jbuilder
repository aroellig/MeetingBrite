json.extract! event, :id, :title, :capacity, :description, :date, :location, :review_ids, :creator_id

<img src="<%= url_for(@event.photo) %>" alt="">