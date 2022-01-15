import { RECEIVE_EVENT_ERRORS } from '../actions/event_action'
import { CLEAR_ERRORS } from '../actions/session_actions'

const eventErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default eventErrorsReducer;