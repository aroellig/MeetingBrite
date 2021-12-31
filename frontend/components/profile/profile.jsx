import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
        this.props.fetchRsvps()
    }

    render(){
        const {current_user, events, rsvps} = this.props;
        let userEvents = [];
        events.forEach((event) => {
          if(event.creator_id === Number(current_user.id)){
              userEvents.push(event)
          }
      })
        let userRsvps = [];
        rsvps.forEach((rsvp) => {
            if(rsvp.user_id === current_user.id){
                userRsvps.push(rsvp)
            }
        })
        let rsvpEvents = []
        for(let i = 0; i < userRsvps.length; i++){
          let userRsvp = userRsvps[i];
          for(let j = 0; j < events.length; j++){
            if(userRsvp.event_id === events[j].id && !rsvpEvents.includes(events[j])){
                  rsvpEvents.push(events[j])
            }
          }
        }
     debugger
        return (
            <div className="profile-outer">
              <div className="profile-username">
                <p>Welcome {current_user.username}!!</p>
              </div>
              <div>
                {userEvents.length === 0 ? (
                    <div className="detail-no-event">
                      <div className="no-details">
                        <p className="p-no-details">
                          You have not yet created any events
                        </p>
                      </div>
                      <div className="link-create-profile">
                        <Link to="/events/new" className="p-create-event">
                          Create Event
                        </Link>
                      </div>
                    </div>
                ) : (
                  <div className="yes-event-outer">
                    <div className="your-event">
                      <p className="p-your-event">Your Event</p>
                    </div>
                    {userEvents.map((event, index) => (
                      <div key={event + "b"} className="user-event">
                        <Link
                          to={`/events/${event._id}`}
                          className="link-profile"
                        >
                          <div className="profile-recip-title-image">
                            
                              
                            
                            <div className="event-title-profile">
                              <p className="event-profile">{event.title}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
      
          );
    }
}

export default Profile