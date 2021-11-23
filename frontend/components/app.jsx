

import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';
import Splash from './splash/splash';
import EventShowContainer from './events/event_show_container';
import EditEventFormContainer from './events/edit_event_form_container';
import CreateEventFormContainer from './events/create_event_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Meeting Brite</h1>
      </Link>
      <a href='https://github.com/aroellig'><button>Github</button></a>
    <a href='https://www.linkedin.com/in/andrew-roellig-a4a0811b7/'><button>Linkedin</button></a>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/events/new" component={CreateEventFormContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <Route path="/events/:eventId/edit" component={EditEventFormContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;