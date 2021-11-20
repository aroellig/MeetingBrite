import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import LogoutFormContainer from './session/logout_form_container'
import {
  Route,
Routes,
Switch,
Link
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
        <h1>MeetingBrite</h1>
       <GreetingContainer />
      </header>
    <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    </div>
);

export default App;