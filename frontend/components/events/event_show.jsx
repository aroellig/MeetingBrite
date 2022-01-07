import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { logoutCurrentUser } from '../../actions/session_actions';
import CreateReviewFormContainer from '../reviews/review_form_container';
import CreateRsvpFormContainer from '../rsvp/create_rsvp_container';

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId)
        this.props.fetchReviews(this.props.event_id)
    }
    render(){
        if (!this.props.event) return null
        const { event, eventId, currentUser, deleteEvent, reviews } = this.props;
        let total_score = 0;
        for (let i = 0; i < reviews.length; i++) {
          let review = reviews[i];
          total_score += review.score;
        }
        let avg_score = 0;
        if (reviews.length === 0){
          avg_score = 0
        }else{
          avg_score = Number(total_score / reviews.length).toFixed(1)
        }
        if (parseInt(currentUser) !== event.creator_id){
        return(
            <div className="event-info">
            <h1 className="show-title">{event.title}</h1>
            <h2 className="show-description">About: {event.description}</h2>
            <h3 className="show-location">Location: {event.location}</h3>
            <h4 className="show-date">Date and Time: {event.date}</h4>
            <h5 className="show-capacity">Capacity: {event.capacity}</h5>
            <div className = "show-photo">
                <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
            </div>
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
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <br/>
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
                <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>Delete Event</button>
                <div className="like-index-stars">
              <div className="rating-star-length">
                    <div className="star-div">
                        {avg_score === 0 ? (
                            <div className="zero-star-icons">
                            <div>
                                <i class="far fa-star"></i>
                            </div>
                            <div>
                                <i class="far fa-star"></i>
                            </div>
                            <div>
                                <i class="far fa-star"></i>
                            </div>
                            <div>
                                <i class="far fa-star"></i>
                            </div>
                            <div>
                                <i class="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score <= 1 && avg_score !== 0 ? (
                            <div className="one-star-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score < 1.6 && avg_score > 1 ? (
                            <div className="one-half-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="third-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score >= 1.6 && avg_score <= 2 ? (
                            <div className="two-star-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score > 2 && avg_score < 2.6 ? (
                            <div className="two-half-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score >= 2.6 && avg_score <= 3 ? (
                            <div className="third-star-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score > 3 && avg_score < 3.6 ? (
                            <div className="third-half-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="fifth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score >= 3.6 && avg_score <= 4 ? (
                            <div className="fourth-star-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fifth-star">
                                <i className="far fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score > 4 && avg_score < 4.6 ? (
                            <div className="fourth-half-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fifth-star">
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        {avg_score >= 4.6 && avg_score <= 5 ? (
                            <div className="fifth-star-icons">
                            <div className="first-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="second-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="third-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fourth-star">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="fifth-star">
                                <i className="fas fa-star"></i>
                            </div>
                            </div>
                        ) : (
                            ""
                        )}
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default EventShow