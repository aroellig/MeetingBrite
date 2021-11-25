import React from 'react';
import { withRouter } from 'react-router';

class ReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submitReview(this.state)
        .then(() => this.props.history.push("/events"));
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <h1>hi</h1>
        )
    }
}

export default withRouter(ReviewForm)