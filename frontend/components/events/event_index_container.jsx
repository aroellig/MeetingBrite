import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, createEvent } from '../../actions/event_action';
import EventIndex from './event_index';

const mSTP = state => ({
    events: Object.values(state.entities.events),
    current_user: state.session.id
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    createEvent: event => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(EventIndex)