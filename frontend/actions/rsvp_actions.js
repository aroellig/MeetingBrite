import * as APIUtil from '../util/rsvp_api_util';

export const RECEIVE_RSVPS = "RECEIVE_RSVPS";
export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";
export const RECEIVE_RSVP_ERRORS = "RECEIVE_RSVP_ERRORS";

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

 const receiveRSVPErrors = (errors) => {
    return{ type: RECEIVE_RSVP_ERRORS,
    errors,
  }};

export const fetchRsvps = () => dispatch => (
    APIUtil.fetchRsvps()
    .then(rsvps => dispatch(receiveRsvps(rsvps)))
)

export const fetchRsvp = rsvpId => dispatch => (
    APIUtil.fetchRsvp(rsvpId)
    .then(rsvp => dispatch(receiveRsvp(rsvp)))
)

export const createRsvp = (rsvp) => (dispatch) =>
  APIUtil.createRsvp(rsvp).then(
    (event) => dispatch(receiveRsvp(rsvp)),
    (errors) => dispatch(receiveRSVPErrors(errors.responseJSON))
  );

export const deleteRSVP = rspvId => dispatch => (
    APIUtil.deleteRSVP(rspvId)
    .then(() => dispatch(removeRsvp(rspvId)))
)