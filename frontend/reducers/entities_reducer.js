import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import reviewsReducer from './reviews_reducer';
import rsvpsReducer from './rsvps_reducer'

const entitiesReducer = combineReducers({

  users: usersReducer,
  events: eventsReducer,
  reviews: reviewsReducer,
  rsvps: rsvpsReducer
});

export default entitiesReducer