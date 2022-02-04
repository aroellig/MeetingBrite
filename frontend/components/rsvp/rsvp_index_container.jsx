import { connect } from 'react-redux';
import { fetchRsvp, fetchRsvps, deleteRSVP } from '../../actions/rsvp_actions';
import { fetchEvents, fetchEvent } from '../../actions/event_action'
import RsvpIndex from './rsvp_index';

const mSTP = (state, ownProps) => {

    return {
      rsvps: Object.values(state.entities.rsvps),
      user_id: state.session.id,
      // event_id: ownProps.eventId,
      events: Object.values(state.entities.events),
      currentUser: state.session.id,
      rsvpEvents: ownProps.rsvpEvents,
      // event: state.entities.events[ownProps.eventId],
      // rsvp: state.entities.rsvp[ownProps.eventId],
      }
    }


const mDTP = dispatch => ({
    fetchRsvps: (userId, eventId) => dispatch(fetchRsvps(userId, eventId)),
    fetchRsvp: rsvpId => dispatch(fetchRsvp(rsvpId)),
    fetchEvents: () => dispatch(fetchEvents()),
    deleteRSVP: (rsvpId) => dispatch(deleteRSVP(rsvpId))
})

export default connect(mSTP, mDTP)(RsvpIndex)