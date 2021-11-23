import React from 'react';
import { Link } from 'react-router-dom';
import CreateEventFormContainer from '../events/create_event_form_container';
import EventForm from '../events/event_form';


const Greeting = ({ currentUser, logout, event }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
      <Link to={`/events`}>Your Events</Link>
      
    </div>

  );

  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
};


export default Greeting;
