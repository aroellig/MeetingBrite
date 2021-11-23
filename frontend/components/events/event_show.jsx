import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
    componentDidMount(){
        this.props.fetchEvent()
    }
    render(){
        if (!this.props.event){
            return null
        }
        const { event } = this.props;
        return(
            <div>
            <h1>{event.title}</h1>
            </div>
        )
    }
}

export default EventShow