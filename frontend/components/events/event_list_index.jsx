class EventIndexList extends React.Component{
    componentDidMount(){
        this.props.fetchEvents()
    }
    render(){
        const { events, deleteEvent } = this.props;
       
        return (
            <div className="events-list-class">
                <div className="title-of-all-events">
                <h1>Events</h1>
                </div>
                <ul>
                    {
                        events.map(event => <EventIndexItemList event={event} deleteEvent={deleteEvent} key={event.id}/>)
                    }
                </ul> 
                <br/>
                {/* <CreateReviewFormContainer eventId={event.id} /> */}
            </div>
        )
    }
}

export default EventIndexList