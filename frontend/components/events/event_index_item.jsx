import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, deleteEvent }) => {
    return (
        <li> 
            <div className="event-title">
                <Link to={`/events/${event.id}`}>{event.title}</Link>
            </div>
            <br/>
            <div className="event-edit">
                <Link to={`/events/${event.id}/edit`}>Edit Event</Link>
            </div>
            <br/>
                <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
            
        </li>
    )
}
export default EventIndexItem