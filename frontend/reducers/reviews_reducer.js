import { RECEIVE_EVENT, RECEIVE_REVIEW } from '../actions/event_action'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
     let newState = Object.assign({}, state);
     switch (action.type) {
         case RECEIVE_REVIEW:
            const { review } = action;
             return Object.assign({}, state, { [review.id]: review} )
         case RECEIVE_EVENT:
             return Object.assign({}, state, action.reviews)
         default:
             return state
     }
 }

 export default reviewsReducer