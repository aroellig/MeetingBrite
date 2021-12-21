import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_action';
import { fetchRsvps } from '../../actions/event_action';
import Profile from './profile'


const mSTP = state => ({
    events: Object.values(state.entities.events),
    current_user: state.session,
    rsvps: Object.values(state.entities.rsvps)
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchRsvps: () => dispatch(fetchRsvps())
})

export default connect(mSTP, mDTP)(Profile)