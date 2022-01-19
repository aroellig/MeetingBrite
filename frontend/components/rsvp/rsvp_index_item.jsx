import React from 'react';
import { Link } from "react-router-dom"


const RsvpIndexItem = ({ rsvps,  currentUser, deleteRSVP, rsvpEvent, event_id }) => {
  let userRsvps = [];
  rsvps.forEach((rsvp) => {
      if(rsvp.user_id === Number(currentUser)){
          userRsvps.push(rsvp)
      }
  })
  console.log(userRsvps)
  console.log(rsvpEvent)
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
                  {/* <button onClick={() => deleteRSVP(rsvpEvent.id)}> */}
                  {/* Delete rsvp
                </button> */}
              </div>
            {/* )} */}
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
