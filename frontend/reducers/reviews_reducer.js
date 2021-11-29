import { RECEIVE_EVENT, RECEIVE_REVIEW } from '../actions/event_action'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
     let newState = Object.assign({}, state);
     switch (action.type) {
         case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState
    
         default:
             return state
     }
 }


 export default reviewsReducer