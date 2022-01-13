import React from 'react';
import { connect } from 'react-redux';
import { fetchEvent, updateEvent } from '../../actions/event_action';
import EventForm from './event_form';

class EditEventForm extends React.Component {
    componentDidMount(){
      this.props.fetchEvent(this.props.match.params.eventId)
  }
  
    render () {
 
      const { event, formType, submitEvent, currentUser } = this.props;
      if (!event) return null;
      return (
        <EventForm
          event={event}
          formType={formType}
          submitEvent={submitEvent}
          currentUser={currentUser}
          edit={true} />
      );
    }
  }
  
  const mSTP = (state, ownProps) => {
    console.log(ownProps.match.path.split("/"))
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id,
    formType: 'Update Event'
    }
  }
  
  const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    submitEvent: event => dispatch(updateEvent(event))
  })
  
  export default connect(mSTP, mDTP)(EditEventForm)