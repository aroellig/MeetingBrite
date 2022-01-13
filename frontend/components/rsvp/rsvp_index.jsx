import React from 'react';
import RsvpIndexItem from './rsvp_index_item';
import { Link } from 'react-router-dom';



class RsvpIndex extends React.Component{
    componentDidMount(){
        this.props.fetchRsvps(this.props.user_id, this.props.event_id)
    }
    render(){
        const { rsvps, user_id, event_id, events } = this.props
        for(let i = 0; i < rsvps.length; i++){
            let response = rsvps[i];
            for(let j = 0; j < events.length; j++ ){
                let event = events[j]
                if(response.event_id === event.id ){
                            return (
            <div className="rsvp-list-class">
                <div className="title-of-all-rsvps">
                <h1>RSVPs</h1>
                </div>
                <ul>
                    {
                        rsvps.map(rsvp => <RsvpIndexItem rsvp={rsvp} user_id={user_id} event_id={event_id}  key={rsvp.id}/>)
                    }
                </ul> 
                <br/>
            </div>
        )
                }
            }
        }

    }
}

export default RsvpIndex