import { RECEIVE_RSVPS, RECEIVE_RSVP, REMOVE_RSVP } from '../actions/rsvp_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_EVENT } from '../actions/event_action'

const rsvpsReducer = (state = {}, action) => {
    Object.freeze(state);
     let newState = Object.assign({}, state);
     switch (action.type) {
         case RECEIVE_RSVPS:
             return action.rsvps;
        //  case RECEIVE_EVENT:
        //      newState[action.event.id] = action.event;
        //      return newState
         case RECEIVE_RSVP:
             newState[action.rsvp] = action.rsvp;
             return newState 
        // case RECEIVE_CURRENT_USER:
        //     return { id: action.currentUser.id };
        case REMOVE_RSVP:
            delete newState[action.rsvpId];
            return newState
         default:
             return state
     }
 }
 
 export default rsvpsReducer;