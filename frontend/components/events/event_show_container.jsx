import { connect } from 'react-redux';
import { fetchEvent, deleteEvent, fetchReviews } from '../../actions/event_action';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id,
    reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    fetchReviews: eventId => dispatch(fetchReviews(eventId))
})

export default connect(mSTP, mDTP)(EventShow)