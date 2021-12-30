import { connect } from 'react-redux';
import { createRsvp } from '../../actions/rsvp_actions';
import RspvForm from './rsvp_form';

const mSTP = (state, ownProps) => ({
    rsvp: {
        attendee_name: '',
        num_attendees: 0,
        user_id: parseInt(state.session.id),
        event_id: ownProps.eventId
    },
    formType: 'Join Event',
    currentUser: state.session.id,
    event: state.entities.events[ownProps.eventId]
})

const mDTP = dispatch => ({
    createRsvp: rsvp => dispatch(createRsvp(rsvp))
})

export default connect (mSTP, mDTP)(RspvForm)