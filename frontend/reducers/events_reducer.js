import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_action'

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.value) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            newState[action.event.id] = action.event;
            return newState
        case REMOVE_EVENT:
            delete newState[action.eventId];
            return newState
        default:
            return state
    }
}

export default eventsReducer;