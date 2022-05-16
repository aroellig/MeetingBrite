# README

## Overview
MeetingBrite is a web application which allows users to create Events for their friends and family to attend. A user can create, update and destroy their own events as well as review events that other users have created as well as RSVP to those events.

## Livelink
A live version of the website can be found here: https://meetingbrite1.herokuapp.com/#/


## Technologies
This is a rails application with the backend using Ruby and the frontend using React. 


## Issues confronted and Solved
One feature that I am particularly proud of is how my app produces different options for each event depending on if that user created the event or not. If they are that events creator they can update the event or delete it. If they are not that events creator they can review it or rsvp to it. The example of how I can solved this can be seen in the first code snippet below. Mainly I solved it by using an if statement and a parseInt to check the user's id against the event_creator's id.
```javascript
  render(){
        if (!this.props.event) return null
        const { event, eventId, currentUser, deleteEvent } = this.props;
        if (parseInt(currentUser) !== event.creator_id){
        return(
            <div className="event-info">
            <h1 className="show-title">{event.title}</h1>
            <h2 className="show-description">About: {event.description}</h2>
            <h3 className="show-location">Location: {event.location}</h3>
            <h4 className="show-date">Date and Time: {event.date}</h4>
            <h5 className="show-capacity">Capacity: {event.capacity}</h5>
            <Link to={{pathname: '/rsvps/new', state: {event_id: this.props.match.params.eventId}}} className="Rsvp-event">RSVP to Event</Link>
            <br/>
            <h6 className="show-event">
                <CreateReviewFormContainer eventId={event.id} />
            </h6>
            </div>
        )
        } else {
            return(
                <div className="event-info">
                <h1 className="show-title">{event.title}</h1>
                <h2 className="show-description">About: {event.description}</h2>
                <h3 className="show-location">Location: {event.location}</h3>
                <h4 className="show-date">Date and Time: {event.date}</h4>
                <h5 className="show-capacity">Capacity: {event.capacity}</h5>
                <br/>
                <Link to={`/events/${event.id}/edit`} className="event-edit">Edit Event</Link>
                <br/>
                <button className="delete-event-button" onClick={() => deleteEvent(event.id)}>Delete Event</button>
                </div>
            )
        }
```

Another challenge which I faced was setting up my RSVPs so that a user could RSVP to an event they wished to. This was because I had difficulty setting the event_id of the RSVP to the id of the Event which the user was responding too. Eventually I was able to solve this by using the state in my link method to pull out the event's id.
```javascript
 <Link to={{pathname: '/rsvps/new', state: {event_id: this.props.match.params.eventId}}} className="Rsvp-event">RSVP to Event</Link>
 ```

 this enabled me to then use the event's id to successfully complete the RSVP.
        
