import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
import CreateReviewFormContainer from '../reviews/review_form_container'

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
    }
    render(){
        if (!this.props.event) return null
        const { event, eventId } = this.props;
        return(
            <div className="event-info">
            <h1 className="show-title">{event.title}</h1>
            <h2 className="show-description">{event.description}</h2>
            <h3 className="show-location">{event.location}</h3>
            <h4 className="show-date">{event.date}</h4>
            <h5 className="show-capacity">{event.capacity}</h5>
            {/* <h7>{event.photo}</h7> */}
            <br/>
            <h6 className="show-event">
                <CreateReviewFormContainer eventId={event.id} />
            </h6>
            </div>
        )
    }
}

export default EventShow