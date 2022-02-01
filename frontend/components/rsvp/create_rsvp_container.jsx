import { connect } from 'react-redux';
import { createRsvp, fetchRsvps, deleteRSVP } from '../../actions/rsvp_actions';
import RsvpForm from './rsvp_form';
import { clearErrors } from '../../actions/session_actions'

const mSTP = (state, ownProps) => {
    return {
    rsvp: {
        attendee_name: '',
        num_attendees: 0,
        user_id: parseInt(state.session.id),
        event_id: ownProps.eventId
    },
    formType: 'Join Event',
    currentUser: state.session.id,
    event: state.entities.events[ownProps.eventId],
    errors: state.errors.rsvp,
    rsvps: Object.values(state.entities.rsvps),
    loggedIn: Boolean(state.session.id)
    }
}

const mDTP = dispatch => ({
    createRsvp: rsvp => dispatch(createRsvp(rsvp)),
    deleteRSVP: (rsvpId) => dispatch(deleteRSVP(rsvpId)),
    clearErrors: () => dispatch(clearErrors()),
    fetchRsvps: () => dispatch(fetchRsvps())
})

export default connect(mSTP, mDTP)(RsvpForm)