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

    componentDidMount(){
      this.props.fetchRsvps()
  }

    handleSubmit(e){
      debugger
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
      let userRsvps = [];
      this.props.rsvps.forEach((rsvp) => {
          if(rsvp.user_id === Number(this.props.currentUser)){
              userRsvps.push(rsvp)
          }
      })
      let responded = false
      for(let i = 0; i < userRsvps.length; i++){
        let rsvp = userRsvps[i];
        if(this.props.event.id === rsvp.event_id){
          responded = true
        }
      }
      
      if(this.props.loggedIn){
        return (
          <div>
          {responded === false ? (
        <div className="rsvp-form">
            <form onSubmit={this.handleSubmit}>
            <br />
                    <button type='submit' value={this.props.formType} className="rsvp-button">{this.props.formType}</button>
            </form>
        </div>
        ) : (
          <div>
          <p className="already-rsvp">you have already rsvp'd to this event</p>
                </div>
        )}  
        </div>
        )
      } else {
        return null
      }
    }
}

export default withRouter(RsvpForm)