import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT, RECEIVE_REVIEWS } from '../actions/event_action'
import { RECEIVE_RSVP } from '../actions/rsvp_actions';


const eventsReducer = (state = {}, action) => {
   Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            debugger
            newState[action.event.id] = action.event;
            return newState
        case REMOVE_EVENT:
            delete newState[action.eventId];
            return newState
        case RECEIVE_RSVP:
            newState[action.rsvp.event.id] = action.rsvp.event;
            return newState 
        default:
            return state
    }
}

export default eventsReducer;