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
            event_id: this.props.location.state.event_id,
          });
        this.props.createRsvp(rsvps)
        .then(() => this.props.history.push("/events"));
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    a
    render(){
        return (
        <div className="rsvp-form">
            <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    value={this.state.attendee_name}
                    onChange={this.update('attendee_name')}
                    placeholder="name"
                    />
            <br/>
                    <input 
                    type="number"
                    value={this.state.num_attendees}
                    onChange={this.update('num_attendees')}
                    placeholder="number of attendees"
                    />
            <br />
                    <button type='submit' value={this.props.formType} className="rsvp-button">{this.props.formType}</button>
            </form>
        </div>
        )
    }
}

export default withRouter(RsvpForm)