import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchEvent, updateEvent } from '../../actions/event_action';
import {clearErrors} from '../../actions/session_actions';
import EventForm from './event_form';

class EditEventForm extends React.Component {
  constructor(props){
    super(props)
  }

    componentDidMount(){
      this.props.fetchEvent(this.props.match.params.eventId)
  }

  renderEventErrors() {
    debugger
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error ${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  
    render () {
      debugger
      const { event, formType, submitEvent, currentUser, errors } = this.props;
      if (!event) return null;
      return (
        <EventForm
          event={event}
          formType={formType}
          submitEvent={submitEvent}
          currentUser={currentUser}
          errors={errors}
          edit={true} />
      );
    }
  }
  
  const mSTP = (state, ownProps) => {
    debugger
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id,
    errors: state.errors.event,
    formType: 'edit'
    }
  }
  
  const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    submitEvent: event => dispatch(updateEvent(event)),
    clearErrors: () => dispatch(clearErrors())
  })
  
  export default withRouter(connect(mSTP, mDTP)(EditEventForm))