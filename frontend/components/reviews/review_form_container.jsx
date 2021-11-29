import { connect } from 'react-redux';
import { createReview } from '../../actions/event_action';
import ReviewForm from './review_form';
import {withRouter} from "react-router-dom"

const mSTP = (state, ownProps) => ({
    review: {
        review: '',
        rating: 10,
        user_id: state.session.id,
        event_id: ownProps.eventId
    },
    formType: 'Create Review',
    currentUser: state.session.id,
    event: state.entities.events[ownProps.eventId]
})

const mDTP = dispatch => ({
    submitReview: review => dispatch(createReview(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewForm))