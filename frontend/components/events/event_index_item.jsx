import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'


const EventIndexItem = ({ event, deleteEvent, current_user }) => {
    let readableDate = new Date(event.date).toDateString();
        return (
        <div className="event-index-items">
        <li> 
            <div className="event-index-item">
            <div className = "event-index-photo">
                <img src={event.photoURL} width="300" height = '200' alt="coverphoto" />
                </div>
            <div>
                <Link to={`/events/${event.id}`} className="event-title">{event.title}</Link>
            </div>
            <br/>
           <div className="event-date">
                <h1>{readableDate}</h1>
           </div>

            <div className="event-location">
                <h2>location: {event.location}</h2>
            </div>
            </div>
        </li>
        </div>
        )
}
export default EventIndexItem