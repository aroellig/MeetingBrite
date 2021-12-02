import * as APIUtil from '../util/rsvp_api_util';

export const RECEIVE_RSVPS = "RECEIVE_RSVPS";
export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";

const receiveRsvps = rsvps => {
    return {
        type: RECEIVE_RSVPS,
        rsvps
    }
}

const receiveRsvp = rsvp => {
    return {
        type: RECEIVE_RSVP,
        rsvp
    }
}

const removeRsvp = rsvpId => {
    return {
        type: REMOVE_RSVP, 
        rsvpId
    }
}

export const fetchRsvps = (userId) => dispatch => (
    APIUtil.fetchRsvps(userId)
    .then(rsvps => dispatch(receiveRsvps(rsvps)))
)

export const fetchRsvp = rsvpId => dispatch => (
    APIUtil.fetchRsvp(rsvpId)
    .then(rsvp => dispatch(receiveRsvp(rsvp)))
)

export const createRsvp = rspv => dispatch => (
    APIUtil.createRsvp(rspv)
    .then(rspv => dispatch(receiveRsvp(rspv)))
)

export const deleteRSVP = rspvId => dispatch => (
    APIUtil.deleteRSVP(rspvId)
    .then(() => dispatch(removeRsvp(rspvId)))
)