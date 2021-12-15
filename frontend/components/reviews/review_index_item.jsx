import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({ review, event_id }) => {
    //test comment
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
                    <br/>
                    </div>
                </li>
            </div>
        </div>
    )
}
export default ReviewIndexItem