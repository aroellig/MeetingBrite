import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

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

export const fetchEvents = () => dispatch => (
    APIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
)

export const fetchEvent = eventId => dispatch => {
    return APIUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = event => dispatch => {
    return APIUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)))
}

export const updateEvent = event => dispatch => {
    debugger
  return  APIUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = eventId => dispatch => (
    APIUtil.removeEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
)

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const fetchReviews = eventId => dispatch => (
    APIUtil.fetchReviews(eventId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
    APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)