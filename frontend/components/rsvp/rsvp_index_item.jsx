import React from 'react';
import { Link } from "react-router-dom"


const RsvpIndexItem = ({ rsvp,  currentUser, deleteRSVP, event, event_id }) => {
    return (
        <div>
          <div className="rsvp-index-item">
            {currentUser  !== rsvp.user_id.toString() ? (
              ""
            ) : (
              <div className="rsvp-index-item">
                  <Link to={`/events/${event_id}`}>{event.title}</Link>
                  <button onClick={() => deleteRSVP(rsvp.id)}>
                  Delete rsvp
                </button>
              </div>
            )}
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
