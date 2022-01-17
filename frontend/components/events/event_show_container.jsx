import { connect } from 'react-redux';
import { fetchEvent, deleteEvent, fetchReviews } from '../../actions/event_action';
import {fetchRsvps } from '../../actions/rsvp_actions'
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    debugger
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews),
    rsvps: Object.values(state.entities.rsvps),
    rsvp: state.entities.rsvps[ownProps.match.params.rsvpId]
}
}

const mDTP = (dispatch) => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchReviews: eventId => dispatch(fetchReviews(eventId)),
    fetchRsvps: () => dispatch(fetchRsvps())

})

export default connect(mSTP, mDTP)(EventShow)