json.extract! event, :id, :title, :description, :location, :date, :creator_id, :photo
if event.photo.attachment == nil
   json.photoURL = ""
else
   json.photoURL url_for(event.photo)
end

