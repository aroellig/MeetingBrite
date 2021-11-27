import React from 'react';
import { withRouter } from 'react-router';

class RsvpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.rsvp;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const rsvps = Object.assign({}, this.state, {
            event_id: this.props.eventId,
          });
        this.props.createRsvp(rsvps)
        .then(() => this.props.history.push("/events"));
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render(){
        return (
        <div className="rsvp-form">
            <form onSubmit={this.handleSubmit}>
                <div className="rsvp-button">
                    <button type='submit' value={this.props.formType}>{this.props.formType}</button>
                </div>
            </form>
        </div>
        )
    }
}

export default withRouter(RsvpForm)