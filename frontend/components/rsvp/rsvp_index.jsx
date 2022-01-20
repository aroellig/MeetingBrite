import React from 'react';
import RsvpIndexItem from './rsvp_index_item';
import { Link } from 'react-router-dom';
import { deleteRSVP } from '../../util/rsvp_api_util';



class RsvpIndex extends React.Component{
    componentDidMount(){
        this.props.fetchRsvps()
    }
    render(){
        if(!this.props.rsvps) return null
        const { rsvps, user_id, deleteRSVP, currentUser, rsvpEvents } = this.props
     
            return (
            <div className="rsvp-index-items">
                 <h1>Your RSVPS</h1>
                <div >
                </div>
                <ul>
                    {
                        rsvpEvents.map(rsvpEvent => <RsvpIndexItem rsvpEvent={rsvpEvent} user_id={user_id} event_id={rsvpEvent.id} deleteRSVP={deleteRSVP} currentUser={currentUser} rsvps={rsvps}   key={rsvpEvent.id}/>)
                        // rsvpEvents.forEach(rsvpEvent => {
                        //     console.log(rsvps[rsvpEvent])
                        // })
                       
                    }
                </ul> 
                <br/>
            </div>
        )
                
            }
        }
export default RsvpIndex