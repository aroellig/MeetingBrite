import { connect } from 'react-redux';
import { createReview } from '../../actions/event_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => ({
    reviews: {
        review: '',
        rating: 10,
        user_id: state.session.id,
        event_id: ownProps.eventId
    },
    formType: 'Create Review',
    current_user: state.session.id
})

const mDTP = dispatch => ({
    submitReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)