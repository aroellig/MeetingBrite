json.merge! event.attributes
if event.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoURL url_for(event.photo)
end

