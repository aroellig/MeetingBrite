import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.reviews;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const eventId = parseInt(this.props.match.params.eventId)
        const review = Object.assign({}, this.state, {
            event_id: eventId
        })
        this.props.submitReview(this.state)
        .then(() => this.props.history.push("/events"));
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <div className="Main-Review-Form">
            <div className="review-header">
            <h3>Leave a review</h3>
            </div>
            <div className="Review-Form">
            <form onSubmit={this.handleSubmit}>
                <br/>
                <label>Review
                <textarea
                value={this.state.review}
                onChange={this.update('review')}
                /> 
                </label>
                <br/>
                <label>Rating
                <input 
                type="number"
                value={this.state.rating}
                onChange={this.update('rating')}
                />
                </label>
                <br />
                <button type='submit' value={this.props.formType}>{this.props.formType}</button>
            </form>
            </div>
            </div>
        )
    }
}

export default withRouter(ReviewForm)