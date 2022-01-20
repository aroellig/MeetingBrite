import React from 'react';
import { Link } from "react-router-dom"


const RsvpIndexItem = ({ rsvps,  currentUser, deleteRSVP, rsvpEvent, event_id }) => {
  let userRsvps = [];
  rsvps.forEach((rsvp) => {
      if(rsvp.user_id === Number(currentUser)){
          userRsvps.push(rsvp)
      }
  })
  let rsvp = "";
  for(let i = 0; i < userRsvps.length; i++){
    if(userRsvps[i].event_id === rsvpEvent.id){
      rsvp = userRsvps[i]
    }
  }

    return (
        <div>
      

              <div className="rsvp-index-item">
                  <Link to={`/events/${event_id}`}>{rsvpEvent.title}</Link>
                          <div className = "rsvp-photo">
                          <img src={rsvpEvent.photoURL} width="300" height = '240' alt="coverphoto" />
                        </div>
                        <br/>
                  <button onClick={() => deleteRSVP(rsvp.id)} className="delete-rsvp-button"> 
                  Delete rsvp
                </button>
              </div>
            
          
        </div>
      );
};
export default RsvpIndexItem
