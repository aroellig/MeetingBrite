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
        <div className="rsvp-index-items">
              <div className="rsvp-index-item">
              <div className = "rsvp-photo">
                          <img src={rsvpEvent.photoURL} width="300" height = '240' alt="coverphoto" />
                        </div>
                  <Link to={`/events/${event_id}`} className="rsvp-title">{rsvpEvent.title}</Link>
                        <br/>
                        <div className="event-date">
                <h1>{new Date(rsvpEvent.date).toDateString()}</h1>
                </div>

            <div className="event-location">
                <h2>location: {rsvpEvent.location}</h2>
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
