import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/event_action'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
     let newState = Object.assign({}, state);
     switch (action.type) {
         case RECEIVE_REVIEW:
            newState[action.review] = action.review;
            return newState
        case RECEIVE_REVIEWS:
            return action.reviews
         default:
             return state
     }
 }


 export default reviewsReducer