json.extract! user, :id, :username, :email

json.events do 
    user.events.each do |event| 
        json.set! event.id do
            json.extract! event,
            :id, :title, :description, :location, :date, :creator_id, :photo
        end
    end
end