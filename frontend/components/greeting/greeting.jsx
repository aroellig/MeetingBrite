import React from 'react';
import { Link } from 'react-router-dom';
import CreateEventFormContainer from '../events/create_event_form_container';
import EventForm from '../events/event_form';


const Greeting = ({ currentUser, logout, event }) => {
  const sessionLinks = () => (
    <div className="entry-page">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="greeting">
      <h2 className="name">Hi, {currentUser.username}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
      <Link to={`/events`}>Your Events</Link>
      
    </div>

  );

  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
};


export default Greeting;
