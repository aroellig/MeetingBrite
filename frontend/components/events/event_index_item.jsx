import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, deleteEvent }) => {
    return (
        <li>
            
            <Link to={`/events/${event.id}`}>{event.description}</Link>
            <Link to={`/events/${event.id}/edit`}>Edit</Link>
            <button onClick={() => deleteEvent(event.id)}></button>
        </li>
    )
}
export default EventIndexItem