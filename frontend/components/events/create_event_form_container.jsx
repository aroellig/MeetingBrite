import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_action';
import EventForm from './event_form';

const mSTP = state => ({
    event: {
        description: '',
        date: '',
        title: '',
        capacity: '',
        location: '',
        photoURL: '',
        creatorId: state.session.id
    },
    formType: 'Create Event'
})

const mDTP = dispatch => ({
    submitEvent: event => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(EventForm)