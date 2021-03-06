import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/review_form_container';
import CreateRsvpFormContainer from '../rsvp/create_rsvp_container';
import ReviewIndexContainer from '../reviews/review_index_container'
import RSVPIndexContainer from '../rsvp/rsvp_index_container';
import NavbarContainer from '../nav/navbar_container'


class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchRsvps()
        this.props.fetchEvent(this.props.match.params.eventId)
        this.props.fetchReviews(this.props.event_id)
        
    }
    render(){
        if (!this.props.event) return null
        const { event, eventId, currentUser, deleteEvent, reviews, rsvps } = this.props;
        let readableDate = new Date(event.date).toDateString();
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
        this.props.rsvps.forEach((rsvp) => {
            if(rsvp.user_id === Number(currentUser)){
                userRsvps.push(rsvp)
            }
        })
        let responded = false
        for(let i = 0; i < userRsvps.length; i++){
          let rsvp = userRsvps[i];
          if(event.id === rsvp.event_id){
            responded = true
          }
        }
               let userReviews = [];
        this.props.reviews.forEach((review) => {
            if(review.user_id === Number(this.props.currentUser)){
                userReviews.push(review)
            }
        })
        let reviewed = false
        for(let i = 0; i < userReviews.length; i++){
          let review = userReviews[i];
          if(this.props.event.id === review.event_id){
            reviewed = true
          }
        }
        
     if((currentUser === undefined || currentUser === null)){

            return (
            <div className="not-logged-in-show">
            <div className="bg-image"></div>
           
            <div className="event-show-navbar-with-review">
        <NavbarContainer />
              </div>
               <div className="event-info">
        <div className = "show-photo">
            <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
        </div>
        <br/>
        <h1 className="show-title">{event.title}</h1>
        <h2 className="show-description">About: {event.description}</h2>
        <h3 className="show-location">Location: {event.location}</h3>
        <h4 className="show-date">Date: {readableDate}</h4>
        <br/>
        <h6 className="average-score"> Average Rating: {avg_score}</h6>
        <h7 className="show-event">
        </h7>
        <h8 className= "reviews">
        <p>Log in or sign up to review and respond to events</p>
        </h8>
        </div>
        </div>
    )
        }  else if (parseInt(currentUser) !== event.creator_id && responded === false && reviewed === false){
           
        return(
            <div className="no-response-no-review-show">
                <div className="bg-image"></div>
                   <div className="event-show-navbar">
            <NavbarContainer/>
            </div>
            <div className="event-info">
            <div className = "show-photo">
                <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
            </div>
            <br/>
            <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date: {readableDate}</h4>
            <br/>
            <h6 className="average-score"> Average Rating: {avg_score}</h6>
            <h7 className="show-event">
                <CreateRsvpFormContainer eventId={event.id} className="RSVP-form"/>
                <CreateReviewFormContainer eventId={event.id} className="Review-form"/>
            </h7>
            <h8 className= "reviews">
            <ReviewIndexContainer eventId={event.id} />
            </h8>
            </div>
            </div>
        )
        } else if (parseInt(currentUser) !== event.creator_id && responded === true && reviewed === true) {
            
            return(
               
                <div className="response-review">
                <div className="bg-image"></div>
                   <div className="event-show-navbar">
            <NavbarContainer/>
            </div>
                <div className="event-info">
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <br/>
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date: {readableDate}</h4>
                <br/>
                <h6 className="average-score"> Average Rating: {avg_score}</h6>
                <h7 className="show-event">
                <p className="already-rsvp">you have already rsvp'd to this event</p>
                </h7>
                <p className="already-reviewed"> you have already reviewed this event</p>
                <h8 className= "reviews">
                <ReviewIndexContainer eventId={event.id}  />
                </h8>
                </div>
                </div>
            )
        } else if ((parseInt(currentUser) !== event.creator_id && responded === true && reviewed === false)) {
         
                return(
                    <div className="rsvp-no-review">
                        <div className="bg-image"></div>
                        <div className="event-show-navbar">
                        <NavbarContainer />
                        </div>
                    <div className="event-info">
                      
                    <div className = "show-photo">
                        <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                    </div>
                    <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date: {readableDate}</h4>
                    <br/>
                    <h6 className="average-score"> Average Rating: {avg_score}</h6>
                    <h7 className="show-event">
                    <p className="already-rsvp">you have already rsvp'd to this event</p>
                    <CreateReviewFormContainer eventId={event.id} className="Review-form"/>
                    </h7>
                    <h8 className= "reviews">
                    <ReviewIndexContainer eventId={event.id} />
                    </h8>
                    </div>
                    </div>
                )
            
      
        } else if(((parseInt(currentUser) !== event.creator_id && responded === false && reviewed === true))) {
            debugger
            return(
                <div className="no-response-review">
                        <div className="bg-image"></div>
                    <div className="navbar-no-response-no-review">
                    <NavbarContainer />
                    </div>
                <div className="event-info">
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date: {readableDate}</h4>
                <br/>
                <h6 className="average-score"> Average Rating: {avg_score}</h6>
                <h7 className="show-event">
                    <CreateRsvpFormContainer eventId={event.id} className="RSVP-form"/>
                </h7>
                <p className="already-reviewed"> you have already reviewed this event</p>
                <h8 className= "reviews-a">
                <ReviewIndexContainer eventId={event.id} />
                </h8>
                </div>
                </div>
            )
        } else {
       
            return(
                <div className="own-event">
                <div className="bg-image"></div>
                    <div className="event-show-navbar">
                    <NavbarContainer />
                    </div>
                 <div className="event-info">
                <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                </div>
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date: {readableDate}</h4>
                <h6 className="average-score"> Average Rating: {avg_score}</h6>
                <br/>
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
                <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>
                   <Link to={'/'}> Delete Event </Link> 
                    </button>
                <h5 className= "reviews-edit">
                <ReviewIndexContainer eventId={event.id} />
                </h5>
                </div>
            </div>
            )
        }
    }
}

export default EventShow