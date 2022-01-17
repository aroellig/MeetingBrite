import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/event_action';
import { fetchRsvps, deleteRSVP } from '../../actions/rsvp_actions';
import Profile from './profile'


const mSTP = state => {
    return{
    events: Object.values(state.entities.events),
    current_user: state.session,
    rsvps: Object.values(state.entities.rsvps),
    }
}

const mDTP = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchRsvps: () => dispatch(fetchRsvps()),
    deleteRSVP: (rsvpId) => dispatch(deleteRSVP(rsvpId))

})

export default connect(mSTP, mDTP)(Profile)