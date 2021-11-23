import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submitEvent(this.state)
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <div className="Main-Event-Form">
                <div className="header">
                <h3>Basic Info</h3>
                </div>
                <div className="Event-Form">
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>Title
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    /> 
                    </label>
                    <br/>
                    <label>Description
                    <input 
                    type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    />
                    </label>
                    <br/>
                    <label>Date
                    <input 
                    type='date'
                    value={this.state.date}
                    onChange={this.update('date')}
                    />
                  </label>
                  <br/>
                  <label>Location
                    <input 
                    type='text'
                    value={this.state.location}
                    onChange={this.update('location')}
                    />
                    </label>
                    <br/>
                    <label>Capacity
                    <input 
                    type='integer'
                    value={this.state.capacity}
                    onChange={this.update('capacity')}
                    />
                    </label>
                    <br />
                    <button type='submit' value={this.props.formType}>Create Event</button>
                </form>
                </div>
            </div>
        )
    }
}

export default EventForm