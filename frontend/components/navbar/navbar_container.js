import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout, login, signup } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  return {
    errors: state.errors.sessionErrors,
    user: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LogOut: (user) => dispatch(logout(user)),
   LogIn: (user) => dispatch(login(user)),
    SignUp: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);