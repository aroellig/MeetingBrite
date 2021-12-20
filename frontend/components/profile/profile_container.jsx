import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_action';
import { fetchRsvps } from '../../actions/event_action';
import Profile from './profile'


const mSTP = state => ({
    events: Object.values(state.entities.events),
    current_user: state.session.id
})

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchRsvps: userId => dispatch(fetchRsvps(userId))
})

export default connect(mSTP, mDTP)(Profile)