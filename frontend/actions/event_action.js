import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

const receiveEvents = events => {
    return{
        type: RECEIVE_EVENTS,
        events
    }
}

const receiveEvent = ({event, reviews }) => {
    return{
        type: RECEIVE_EVENT,
        event,
        reviews
    }
}

const removeEvent = eventId => {
    return {
        type: REMOVE_EVENT,
        eventId
    }
}

const receiveReview = ({ review, user }) => ({
    type: RECEIVE_REVIEW,
    review,
    user
})

export const fetchEvents = () => dispatch => (
    APIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
)

export const fetchEvent = eventId => dispatch => (
    APIUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
)

export const createEvent = event => dispatch => (
    APIUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)))
)

export const updateEvent = event => dispatch => (
    APIUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
)

export const deleteEvent = eventId => dispatch => (
    APIUtil.removeEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
)

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
)