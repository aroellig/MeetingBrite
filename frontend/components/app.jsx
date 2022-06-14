

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
import EventIndexContainer from './events/event_index_container';
import CreateReviewFormContainer from './reviews/review_form_container';
import CreateRsvpFormContainer from './rsvp/create_rsvp_container';
import ReviewIndexContainer from './reviews/review_index_container';
import RsvpIndexContainer from './rsvp/rsvp_index_container';
import ProfileContainer from './profile/profile_container';
import NavbarContainer from './nav/navbar_container'


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/events/new" component={CreateEventFormContainer} />
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <Route path="/events/:eventId/edit" component={EditEventFormContainer} />
      <Route exact path="/" component={Splash} />
      <Route exact path="/events" component={EventIndexContainer}/>
      <Route path="/reviews/new" component={CreateReviewFormContainer} />
      <Route path="/rsvps/new" component={CreateRsvpFormContainer}/>
      <Route exact path="/events/:eventId/reviews" component={ReviewIndexContainer}/>
      <Route exact path="/rspvs" component={RsvpIndexContainer}/>
      <Route exact path="/profile" component={ProfileContainer}/>
    </Switch>

        <div className="icons">
    <footer className="header">
      <a href='https://github.com/aroellig' className="Github"><i class="fab fa-github"></i></a>
    <a href='https://www.linkedin.com/in/andrew-roellig-a4a0811b7/' className="Linkedin"><i class="fab fa-linkedin"></i></a>
    <br/>
    </footer>
    </div>
  </div>
  
);
??
export default App;