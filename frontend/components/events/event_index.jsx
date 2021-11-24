import React from 'react';
import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';


class EventIndex extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
    }
    render(){
        const { events, deleteEvent } = this.props;
       
        return (
            <div className="events-list">
                <div className="title">
                <h1>Events</h1>
                </div>
                <ul>
                    {
                        events.map(event => <EventIndexItem event={event} deleteEvent={deleteEvent} key={event.id}/>)
                    }
                </ul> 
                <div className="create-event">
            <Link to='/events/new'>Create Event</Link>
            </div>
            </div>
        )
    }
}

export default EventIndex