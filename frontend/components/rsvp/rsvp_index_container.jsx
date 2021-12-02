import { connect } from 'react-redux';
import { fetchRsvp, fetchRsvps } from '../../actions/rsvp_actions';
import { fetchEvents, fetchEvent } from '../../actions/event_action'
import RsvpShow from './event_show';

const mSTP = (state, ownProps) => {
    return {
      rsvps: Object.values(state.entities.rsvps),
      user_id: state.session.id,
      event_id: ownProps.match.params.eventId,
      events: Object.values(state.entities.events)
      }
    }


const mDTP = dispatch => ({
    fetchRsvps: (userId, eventId) => dispatch(fetchRsvps(userId, eventId)),
    fetchRsvp: rsvpId => dispatch(fetchRsvp(rsvpId)),
    fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mSTP, mDTP)(RsvpIndex)