json.extract! event, :id, :title, :description, :location, :date, :creator_id
if event.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoURL url_for(event.photo)
end

