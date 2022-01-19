import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
import CreateReviewFormContainer from '../reviews/review_form_container';
import CreateRsvpFormContainer from '../rsvp/create_rsvp_container';
import ReviewIndexContainer from '../reviews/review_index_container'
import RSVPIndexContainer from '../rsvp/rsvp_index_container';


class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
        this.props.fetchReviews(this.props.event_id)
        this.props.fetchRsvps()
    }
    render(){
        if (!this.props.event) return null
        const { event, eventId, currentUser, deleteEvent, reviews, rsvps } = this.props;
        let total_score = 0;
        for (let i = 0; i < reviews.length; i++) {
          let review = reviews[i];
          total_score += review.rating;
        }
        let avg_score = 0;
        if (reviews.length === 0){
          avg_score = 0
        }else{
          avg_score = Number(total_score / reviews.length).toFixed(1)
        }

        let userRsvps = [];
        rsvps.forEach((rsvp) => {
            if(rsvp.user_id === Number(currentUser.id)){
                userRsvps.push(rsvp)
            }
        })
        let responded = false
        for(let i = 0; i < userRsvps.length; i++){
          let rsvp = userRsvps[i];
          debugger
          if(event.id === rsvp.event_id){
            responded = true
          }
        }
        if (parseInt(currentUser) !== event.creator_id && responded === false){
        return(
            <div className="event-info">
            <h1 className="show-title">{event.title}</h1>
            <h2 className="show-description">About: {event.description}</h2>
            <h3 className="show-location">Location: {event.location}</h3>
            <h4 className="show-date">Date and Time: {event.date}</h4>
            {/* <h5 className="show-capacity">Capacity: {event.capacity}</h5> */}
            <div className = "show-photo">
                <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
            </div>
            <br/>
            <h6 className="average-score"> Average Rating: {avg_score}</h6>
            <h7 className="show-event">
                <CreateRsvpFormContainer eventId={event.id} />
                <CreateReviewFormContainer eventId={event.id} />
            </h7>
            <h8 className= "reviews">
            <ReviewIndexContainer eventId={event.id} />
            </h8>
            </div>
        )
        } else if (parseInt(currentUser) !== event.creator_id && responded === true) {
            return(
                <div className="event-info">
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date and Time: {event.date}</h4>
                {/* <h5 className="show-capacity">Capacity: {event.capacity}</h5> */}
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <br/>
                <h6 className="average-score"> Average Rating: {avg_score}</h6>
                <h7 className="show-event">
                <RSVPIndexContainer rsvpId={rsvp.id}/>
                </h7>
                <h8 className= "reviews">
                <ReviewIndexContainer eventId={event.id} />
                </h8>
                </div>
            )
        } else {
            
            return(
                <div className="event-info">
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date and Time: {event.date}</h4>
                {/* <h5 className="show-capacity">Capacity: {event.capacity}</h5> */}
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <h6 className="average-score"> Average Rating: {avg_score}</h6>
                <br/>
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
                <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>
                   <Link to={'/'}> Delete Event </Link> 
                    </button>
                <h5 className= "reviews">
                <ReviewIndexContainer eventId={event.id} />
                </h5>
            </div>
            )
        }
    }
}

export default EventShow