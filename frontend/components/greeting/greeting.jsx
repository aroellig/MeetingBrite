import React from 'react';
import { Link } from 'react-router-dom';
import CreateEventFormContainer from '../events/create_event_form_container';
import EventForm from '../events/event_form';


const Greeting = ({ currentUser, logout, event }) => {
  const sessionLinks = () => (
    <div className="entry-page">
        <Link to="/login" className="Login-entry">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" className="Signup-entry">Sign up</Link>
        {/* <br /> */}
      <div className="entry-photo">
        <img className="cover-photo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.ticketarena.co.uk%2Fmedia%2F15419%2F69096385_2914891898585163_3454151439771762688_o.jpg&f=1&nofb=1" width="925" height = '300'></img>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <div className="greeting">
      <div className="Hello">
      <h2 className="name">{currentUser.email}</h2>
      </div>
      <div className="logout-button">
      <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
      <div className="create-event">
            <Link to='/events/new'>Create Event</Link>
            </div>
            <div className="cover-photo">
              <img className="cover-photo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jrTut3pr3F-umVIuN61epgHaE7%26pid%3DApi&f=1"></img>
            </div>
      <div className="events-list">
      <Link to={`/events`}>Events List</Link>
      <Link to={`/profile`}>Profile</Link>
      </div>
    </div>

  );

  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
};


export default Greeting;
