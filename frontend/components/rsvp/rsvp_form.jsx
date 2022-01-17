import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";

class RsvpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.rsvp;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        // const rsvps = Object.assign({}, this.state, {
        //     eventId: this.props.location.state.event_id,
        //   });
        // this.props.createRsvp(rsvps)
        const eventId = this.props.event.id
        const rsvp = Object.assign({}, this.state, {
            eventId
        });
      
        if (this.props.currentUser) {
          debugger
            this.props.createRsvp(rsvp)
            .then(() => this.props.history.push("/events"));
            
        }
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    renderErrors() {
        debugger
        return (
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error ${i}`}>{error}</li>
            ))}
          </ul>
        );
      }
    
      componentWillUnmount() {
        this.props.clearErrors();
      }
    

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