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
  console.log(userRsvps)
  console.log(rsvpEvent)
  console.log(rsvp)
    return (
        <div>
          <div className="rsvp-index-item">
            {/* {currentUser  !== rsvp.user_id.toString() ? ( */}
              {/* "" */}
            {/* ) : ( */}
              <div className="rsvp-index-item">
                  <Link to={`/events/${event_id}`}>{rsvpEvent.title}</Link>
                          {/* <div className = "rsvp-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                        </div> */}
                        <br/>
                  <button onClick={() => deleteRSVP(rsvp.id)}> 
                  Delete rsvp
                </button>
              </div>
            
          </div>
          {/* <div>
            {currentUser  === rsvp.user_id.toString() ? (
              <div>
                <button onClick={() => deleteRSVP(rsvp.id)}>
                  Delete rsvp
                </button>
              </div>
            ) : (
              ""
            )}
          </div> */}
        </div>
      );
};
export default RsvpIndexItem
