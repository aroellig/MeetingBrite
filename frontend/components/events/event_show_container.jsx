import { connect } from 'react-redux';
import { fetchEvent, deleteEvent } from '../../actions/event_action';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    return {
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

export default connect(mSTP, mDTP)(EventShow)