import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
  } from '../actions/session_actions';
  
  import { RECEIVE_RSVP } from '../actions/rsvp_actions'
  const _nullUser = Object.freeze({
    id: null
  });
  
  const sessionReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      case RECEIVE_RSVP:
        newState[action.rsvp.user.id] = action.rsvp.user;
        return newState 
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  