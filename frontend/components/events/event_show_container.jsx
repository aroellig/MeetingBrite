import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_action';
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return {
    event: state.entities.events[ownProps.match.params.eventId]
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId))
})

export default connect(mSTP, mDTP)(EventShow)