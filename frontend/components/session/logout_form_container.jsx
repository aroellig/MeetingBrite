import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(logout(user)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
