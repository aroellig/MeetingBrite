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
                        events.map(event => <EventIndexItem event={event} deleteEvent={deleteEvent}/>)
                    }
                </ul>
                <Link to='/events/new'>New Event</Link>
            </div>
        )
    }
}

export default EventIndex