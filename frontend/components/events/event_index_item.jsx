import React from 'react';
import { Link } from 'react-router-dom';


const EventIndexItem = ({ event, deleteEvent, current_user }) => {
        return (
        <div className="event-index-items">
        <li> 
            <div className="event-index-item">
            <div>
                <Link to={`/events/${event.id}`} className="event-title">{event.title}</Link>
            </div>
            <br/>
            <h1 className="date">{event.date}</h1>
            <br />
            <h2 className="location">location: {event.location}</h2>
            <br/>
                <Link to={`/events/${event.id}/reviews`} className="reviews">Reviews</Link>
            </div>
        </li>
        </div>
        )
}
export default EventIndexItem