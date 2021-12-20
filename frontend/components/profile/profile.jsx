import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
        this.props.fetchRsvps(this.props.current_user.id)
    }

    render(){
        const {current_user, events} = this.props;
        let userEvents = [];
        events.forEach((event) => {
            if(event.creator_id === current_user.id){
                userEvents.push(event)
            }
        })
    }
}

export default Profile