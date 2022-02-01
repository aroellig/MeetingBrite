import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import EventShowContainer from '../events/event_show_container';
import EditEventFormContainer from '../events/edit_event_form_container';
import CreateEventFormContainer from '../events/create_event_form_container';
import EventIndexContainer from '../events/event_index_container';

const Splash = () => {    return(
        <div className="homepage">
            <EventIndexContainer />
        </div>
    )}
    export default Splash;