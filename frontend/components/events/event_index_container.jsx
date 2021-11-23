import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../../actions/event_action';
import EventIndex from './event_index';

const mSTP = state => ({
    events: Object.values(state.entities.events)
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

export default connect(mSTP, mDTP)(EventIndex)