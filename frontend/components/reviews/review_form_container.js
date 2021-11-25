import { connect } from 'react-redux';
import { createReview } from '../../actions/event_action';
import ReviewForm from 'review_form';

const mSTP = state => ({
    review: {
        review: '',
        rating: 10
        // creatorId: state.session.id
    },
    formType: 'Create Review'
})

const mDTP = dispatch => ({
    submitReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)