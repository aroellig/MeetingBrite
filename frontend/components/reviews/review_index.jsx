import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';



class ReviewIndex extends React.Component{
    componentDidMount(){
        this.props.fetchReviews()
    }
    render(){
        const { reviews } = this.props;
       
        return (
            <div className="reviews-list-class">
                <div className="title-of-all-reviews">
                <h1>Reviews</h1>
                </div>
                <ul>
                    {
                        reviews.map(event => <ReviewIndexItem review={review}  key={review.id}/>)
                    }
                </ul> 
                <br/>
            </div>
        )
    }
}

export default ReviewIndex