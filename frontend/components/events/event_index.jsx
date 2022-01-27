import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/review_form_container';
import SearchContainer from '../search/search_container';
import NavbarContainer from '../nav/navbar_container'


class EventIndex extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
    }
    render(){
        const { events, deleteEvent, current_user } = this.props;
       
        return (
            <div>
                <NavbarContainer/>
            <div className="events-list-class">
                <div className="title-of-all-events">
                <h1>Events</h1>
           
                </div>
                <ul className="all-events">
                    {
                        events.map(event => <EventIndexItem event={event} deleteEvent={deleteEvent} current_user={current_user} key={event.id}/>)
                    }
                </ul> 
                <br/>
                {/* <CreateReviewFormContainer eventId={event.id} /> */}
            </div>
            </div>
        )
    }
}

export default EventIndex