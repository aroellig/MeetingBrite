import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, deleteReview, currentUser }) => {
    // // const reviews = this.props.reviews
    // let total_score = 0
    // // for(let i = 0; i < reviews.length; i++){
    // //   let review = reviews[i];
    // //   total_score += review.score
    // // }
    // const avg_score = total_score / reviews.length
    return (
        <div>
            {review.user_id !== parseInt(currentUser) ? (
            <div className="review-index-items">
                <li> 
                    {}
                    <div className="review-index-item">
                        <div className="review-title">
                            <p>{review.review}</p>
                        </div>
                        <br/>
                        <div className="review-rating">
                            <p>{review.rating}</p>
                        </div>
                {/* <button onClick={() => deleteReview(review.id)} className="delete-review-button"> 
                  Delete review
                </button> */}
                    <br/>
                    </div>
                </li>
            </div>
            ) : (
                <div className="review-index-items">
                <li> 
                    {}
                    <div className="review-index-item">
                        <div className="review-title">
                            <p>{review.review}</p>
                        </div>
                        <br/>
                        <div className="review-rating">
                            <p>{review.rating}</p>
                        </div>
                <button onClick={() => deleteReview(review.id)} className="delete-review-button"> 
                  Delete review
                </button>
                    <br/>
                    </div>
                </li>
            </div>
            )}
        </div>
    )
}
export default ReviewIndexItem