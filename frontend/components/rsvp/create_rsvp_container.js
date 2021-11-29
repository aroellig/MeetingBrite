import { connect } from 'react-redux';
import { createRsvp } from '../../actions/rsvp_actions';
import { createEvent } from '../../util/event_api_util';
import RspvForm from './rsvp_form';

const mSTP = (state, ownProps) => ({
    rsvp: {
        attendee_name: "",
        user_id: state.session.id,
        event_id: ownProps.event_id
    },
    formType: 'Join Event',
    currentUser: state.session.id,
    event: state.entities.events[ownProps.eventId]
})

const mDTP = dispatch => ({
    createRsvp: event => dispatch(createRsvp(event))
})

export default connect (mSTP, mDTP)(RspvForm)