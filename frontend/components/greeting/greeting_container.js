import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { createEvent } from '../../actions/event_action'
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createEvent: event => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
