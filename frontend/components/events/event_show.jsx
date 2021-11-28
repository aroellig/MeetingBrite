import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
import CreateReviewFormContainer from '../reviews/review_form_container'

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
    }
    render(){
        const { event, eventId } = this.props;
        return(
            <div className="event-info">
            <h1>{event.title}</h1>
            <h2>{event.description}</h2>
            <h3>{event.location}</h3>
            <h4>{event.date}</h4>
            <h5>{event.capacity}</h5>
            <br/>
            <h6 >
                <CreateReviewFormContainer eventId={event.id} />
            </h6>
            </div>
        )
    }
}

export default EventShow