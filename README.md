# README

MeetingBrite is a web application which allows users to create Events for their friends and family to attend. A user can create, update and destroy their own events as well as review events that other users have created as well as RSVP to those events.

A live version of the website can be found here: https://meetingbrite.herokuapp.com/#/

This is a rails application with the backend using Ruby and the frontend using React. 

One feature that I am particularly proud of is how my app produces different options for each event depending on if that user created the event or not. If they are that events creator they can update the event or delete it. If they are not that events creator they can review it or rsvp to it. 
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

        