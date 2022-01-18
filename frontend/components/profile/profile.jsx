import React from "react";
import { Link } from "react-router-dom";
import EventIndexContainer from '../events/event_index_container';
import RSVPIndexContainer from '../rsvp/rsvp_index_container'

class Profile extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
        this.props.fetchRsvps().then(response => console.log(response))
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
            if(rsvp.user_id === Number(current_user.id)){
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
                      <p className="p-your-event">Your Events</p>
                    </div>
                    {userEvents.map((event, index) => (
                      <div key={event + "b"} className="user-event">
                        <h1>{event.title}</h1>
                        {/* <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                        </div> */}
                      </div>
                    ))}
                  </div> 
                )}
              </div>
              <div>
              {userRsvps.length === 0 ? (
                    <div className="detail-no-rsvp">
                      <div className="no-details">
                        <p className="p-no-details">
                          You have not Rsvp'd to any events
                        </p>
                      </div>
                      <div className="link-create-profile">
                        <Link to="/events" className="p-search-event">
                          search for events
                        </Link>
                      </div>
                    </div>
                ) : (
                  <div className="yes-rsvp-outer">
                    <div className="your-rsvp">
                      <p className="p-your-Rsvps">Your Rsvps</p>
                    </div>
                    {rsvpEvents.map((event, index) => (
                      <div key={event + "b"} className="user-event-rsvp">
                        {/* <h1>{event.title}</h1> */}
                        {/* <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                        </div> */}
                      <RSVPIndexContainer eventId={event.id} />
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