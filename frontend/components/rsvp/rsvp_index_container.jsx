import { connect } from 'react-redux';
import { fetchRsvp, fetchRsvps } from '../../actions/rsvp_actions';
import { fetchEvents } from '../../actions/event_action'
import RsvpShow from './event_show';

const mSTP = (state, ownProps) => {
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.entities.users[state.session.id],
    currentUserRsvp: Object.values(
      state.entities.users[state.session.id].rsvps),
    reservations: Object.values(state.entities.reservations),
    }
}

const mDTP = dispatch => ({
    fetchRsvps: () => dispatch(fetchRsvps()),
    fetchRsvp: rsvpId => dispatch(fetchRsvp(rsvpId)),
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mSTP, mDTP)(RsvpShow)