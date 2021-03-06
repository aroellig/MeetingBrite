import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';



class ReviewIndex extends React.Component{
    componentDidMount(){
      
        this.props.fetchReviews(this.props.event_id)
    }
    render(){
        debugger
        const { reviews, event_id, user_id, deleteReview, currentUser } = this.props
        let eventReviews = [];
        reviews.forEach((review) => {
            eventReviews.push(review)
        })
        if(eventReviews.length > 0){
        return (
            <div className="reviews-list-class">
                <div className="title-of-all-reviews">
                <h1>Reviews</h1>
                </div>
                <ul>
                    {
                        reviews.map(review => <ReviewIndexItem review={review} user_id={user_id} event_id={event_id} deleteReview={deleteReview} currentUser={currentUser}  key={review.id}/>)
                    }
                </ul> 
                <br/>
            </div>
        )
    } else {
        return (
            <p className="no-reviews">No users have reviewed this event yet</p>
        )
    }
    }
}

export default ReviewIndex