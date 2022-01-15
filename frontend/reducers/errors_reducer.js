import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';
import event_errors_reducer from './event_errors_reducer';
import eventErrorsReducer from './event_errors_reducer';

const errorsReducer = combineReducers({

  sessionErrors: session_errors_reducer,
  event: eventErrorsReducer
});

export default errorsReducer