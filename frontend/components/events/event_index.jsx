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
            <div>
                <ul>
                    {
                        events.map(event => <EventIndexItem event={event} deleteEvent={deleteEvent} key={event.id}/>)
                    }
                </ul>
            <Link to='/events/new'>Create Event</Link>
            </div>
        )
    }
}

export default EventIndex