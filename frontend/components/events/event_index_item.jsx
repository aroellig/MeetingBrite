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
            <div className = "event-index-photo">
                <img src={event.photoURL} width="300" height = '240' alt="coverphoto" />
                </div>
            </div>
        </li>
        </div>
        )
}
export default EventIndexItem