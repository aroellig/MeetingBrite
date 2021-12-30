import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
import CreateReviewFormContainer from '../reviews/review_form_container';
import CreateRsvpFormContainer from '../rsvp/create_rsvp_container';

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
    }
    render(){
        if (!this.props.event) return null
        const { event, eventId, currentUser, deleteEvent } = this.props;
        if (parseInt(currentUser) !== event.creator_id){
        return(
            <div className="event-info">
            <h1 className="show-title">{event.title}</h1>
            <h2 className="show-description">About: {event.description}</h2>
            <h3 className="show-location">Location: {event.location}</h3>
            <h4 className="show-date">Date and Time: {event.date}</h4>
            <h5 className="show-capacity">Capacity: {event.capacity}</h5>
            <br/>
            <h6 className="show-event">
                <CreateRsvpFormContainer eventId={event.id} />
                <CreateReviewFormContainer eventId={event.id} />
            </h6>
            </div>
        )
        } else {
            return(
                <div className="event-info">
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date and Time: {event.date}</h4>
                <h5 className="show-capacity">Capacity: {event.capacity}</h5>
                <br/>
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
                <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>Delete Event</button>
                </div>
            )
        }
    }
}

export default EventShow