import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, deleteReview }) => {
    // // const reviews = this.props.reviews
    // let total_score = 0
    // // for(let i = 0; i < reviews.length; i++){
    // //   let review = reviews[i];
    // //   total_score += review.score
    // // }
    // const avg_score = total_score / reviews.length
   
    return (
        <div>
            <div className="review-index-items">
                <li> 
                    <div className="review-index-item">
                        <div className="review-title">
                            <p>{review.review}</p>
                        </div>
                        <br/>
                        <div className="review-rating">
                            <p>{review.rating}</p>
                        </div>
                <button onClick={() => deleteReview(review.id)}> 
                  Delete review
                </button>
                    <br/>
                    </div>
                </li>
                {/* <div className="avg_score">
                    {
                        avg_score
                    }
                </div> */}
            </div>
        </div>
    )
}
export default ReviewIndexItem