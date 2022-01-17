import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_action';
import {clearErrors} from '../../actions/session_actions';
import EventForm from './event_form';

const mSTP = state => ({
    event: {
        description: '',
        date: '',
        title: '',
        capacity: '',
        location: '',
        photoURL: '',
        creator_id: state.session.id
    },
    formType: 'Create Event',
    errors: state.errors.event
})

const mDTP = dispatch => ({
    submitEvent: event => dispatch(createEvent(event)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(EventForm)