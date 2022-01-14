import { connect } from 'react-redux';
import { fetchReviews, createReview } from '../../actions/event_action'
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => {
    debugger
    return {
    reviews: Object.values(state.entities.reviews),
    user_id: state.session.id,
    event_id: ownProps.eventId
    }
}

const mDTP = dispatch => ({
    fetchReviews: eventId => dispatch(fetchReviews(eventId)),
})

export default connect(mSTP, mDTP)(ReviewIndex)