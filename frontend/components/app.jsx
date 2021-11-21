

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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
     
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;