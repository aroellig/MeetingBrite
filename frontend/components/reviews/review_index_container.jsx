import { connect } from 'react-redux';
import { fetchReviews, createReview } from '../../actions/event_action'
import ReviewIndex from './review_index';

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
})

export default connect(mSTP, mDTP)(ReviewIndex)