import { connect } from 'react-redux';
import { createReview } from '../../actions/event_action';
import ReviewForm from './review_form';
import {withRouter} from "react-router-dom"

const mSTP = (state, ownProps) => {
    return {
    review: {
        review: '',
        rating: 10,
        user_id: parseInt(state.session.id),
        event_id: ownProps.eventId
    },
    formType: 'Create Review',
    currentUser: state.session.id,
    event: state.entities.events[ownProps.eventId],
    reviews: Object.values(state.entities.reviews),
    loggedIn: Boolean(state.session.id)
    }
}

const mDTP = dispatch => ({
    submitReview: review => dispatch(createReview(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm))