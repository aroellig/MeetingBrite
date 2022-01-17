import { RECEIVE_RSVP_ERRORS, RECEIVE_RSVP } from '../actions/rsvp_actions'
import { CLEAR_ERRORS } from '../actions/session_actions'
import { RECEIVE_EVENTS } from '../actions/event_action'

const rsvpErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RSVP_ERRORS:
      if (action.errors){
      return action.errors;
      }else{
        return []
      }
    case RECEIVE_RSVP:
      return [];
    case RECEIVE_EVENTS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default rsvpErrorsReducer;