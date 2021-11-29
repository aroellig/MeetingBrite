import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItemList = ({ event, deleteEvent }) => {
    return (
        <div className="event-index-items">
        <li> 
            <div className="event-index-item">
            <div className="event-title">
                <Link to={`/events/${event.id}`}>{event.title}</Link>
            </div>
            <br/>
            {/* <div className="event-edit">
                <Link to={`/events/${event.id}/edit`}>Edit Event</Link>
            </div> */}

            <br/>
            <div className="Rsvp-event">
                <Link to='/rsvps/new'>RSVP to Event</Link>
            </div>
            <br/>
                {/* <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>Delete Event</button> */}
            </div>
            
        </li>
        </div>
    )
}
export default EventIndexItemList