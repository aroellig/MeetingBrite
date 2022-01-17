import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';
import eventErrorsReducer from './event_errors_reducer';
import rsvpErrorsReducer from './rsvp_errors_reducer';

const errorsReducer = combineReducers({

  session: session_errors_reducer,
  event: eventErrorsReducer,
  rsvp: rsvpErrorsReducer
});

export default errorsReducer