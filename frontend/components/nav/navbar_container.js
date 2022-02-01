import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import NavBar from './navbar';

const mapStateToProps = state => {
  debugger
  return{
  loggedIn: Boolean(state.session.id)
  }
}
;
const dispatchStatetoProps = dispatch => ({
  logout: () => dispatch(logout()),

})
export default withRouter(connect(
  mapStateToProps,
  dispatchStatetoProps
)(NavBar));