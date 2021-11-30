import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItem = ({ event, deleteEvent }) => {
    return (
        <div className="event-index-items">
        <li> 
            <div className="event-index-item">
            <div>
                <Link to={`/events/${event.id}`} className="event-title">{event.title}</Link>
            </div>
            <br/>
                <Link to={`/events/${event.id}/reviews`} className="reviews">Reviews</Link>
            <br />
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
            <br/>
                <Link to='/rsvps/new' className="Rsvp-event">RSVP to Event</Link>
            <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>Delete Event</button>
            </div>
            
        </li>
        </div>
    )
}
export default EventIndexItem