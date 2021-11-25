import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent()
    }
    render(){
        const { event } = this.props;
        return(
            <div className="event-info">
            <h1>{event.title}</h1>
            <h2>{event.description}</h2>
            <h3>{event.location}</h3>
            <h4>{event.date}</h4>
            <h5>{event.capacity}</h5>
            </div>
        )
    }
}

export default EventShow