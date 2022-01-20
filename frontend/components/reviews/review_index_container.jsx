import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/event_action'
import ReviewIndex from './review_index';

const mSTP = (state, ownProps) => {
    debugger
    return {
    reviews: Object.values(state.entities.reviews),
    user_id: state.session.id,
    event_id: ownProps.eventId,
    currentUser: state.session.id
    }
}

const mDTP = dispatch => ({
    fetchReviews: eventId => dispatch(fetchReviews(eventId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewIndex)