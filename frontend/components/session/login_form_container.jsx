import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemoUser: () => dispatch(login({username: "guestas2", password: "password12", email: 'email@email.com'})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
