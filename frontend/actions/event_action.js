import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveEvents = events => {
    return{
        type: RECEIVE_EVENTS,
        events
    }
}

const receiveEvent = (event) => {
    return{
        type: RECEIVE_EVENT,
        event
    }
}

const removeEvent = eventId => {
    return {
        type: REMOVE_EVENT,
        eventId
    }
}

const receiveReview =  review  => ({
    type: RECEIVE_REVIEW,
    review,
    
})

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const receiveEventErrors = (errors) => {
    return{ type: RECEIVE_EVENT_ERRORS,
    errors,
  }};
  
  export const receiveReviewErrors = (errors) => {
    return{ type: RECEIVE_REVIEW_ERRORS,
    errors,
  }};
  

export const fetchEvents = () => dispatch => (
    APIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
)

export const fetchEvent = eventId => dispatch => {
    return APIUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = (event) => (dispatch) =>
  APIUtil.createEvent(event).then(
    (event) => dispatch(receiveEvent(event)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON))
  );

  export const updateEvent = (event) => (dispatch) =>
  APIUtil.updateEvent(event).then(
    (event) => dispatch(receiveEvent(event)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON))
  );

export const deleteEvent = eventId => dispatch => (
    APIUtil.removeEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
)

export const createReview = review => dispatch => {
    return APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
    
}

export const updateReview = (review) => (dispatch) =>
APIUtil.updateReview(review).then(
  (review) => dispatch(receiveReview(review)),
  (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
);

export const deleteReview = reviewId => dispatch => (
    APIUtil.removeReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)

export const fetchReviews = eventId => dispatch => (
    APIUtil.fetchReviews(eventId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
    APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)