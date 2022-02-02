import React from "react";
import { Link } from "react-router-dom";
import EventIndexContainer from '../events/event_index_container';
import RSVPIndexContainer from '../rsvp/rsvp_index_container'
import NavbarContainer from '../nav/navbar_container'

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
              <NavbarContainer />
              <div className="profile-username">
                {/* <p>Welcome!!</p> */}
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
                  <div className="user-events">
                    <div className="your-event">
                      <p className="p-your-event">Your Events</p>
                    </div>
                    {userEvents.map((event, index) => (
                      <div key={event + "b"} className="user-event">
                         <img src={event.photoURL} width="300" height = '240' alt="coverphoto" />
                         <Link to={`/events/${event.id}`} className="user-event-title">{event.title}</Link>
                         <br/>
                         <div className="event-date">
                <h1>{new Date(event.date).toDateString()}</h1>
           </div>

            <div className="event-location">
                <h2>location: {event.location}</h2>
            </div>
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
                          Search for events
                        </Link>
                      </div>
                    </div>
                ) : (
                  
                  <div className="user-rsvps">
                    <div className="your-rsvp">
  
                    </div>
                    {/* {rsvpEvents.map((event) => ( */}

                      {/* <div key={event} className="user-event-rsvp"> */}
                        
                        {/* <div className = "show-photo">
                    <img src={event.photoURL} width="925" height = '300' alt="coverphoto" />
                        </div> */}
                      <RSVPIndexContainer rsvpEvents={rsvpEvents} />
                      </div>
                    // ))}
                  // </div> 
                )}
              </div>
            </div>
      
          );
    }
}

export default Profile