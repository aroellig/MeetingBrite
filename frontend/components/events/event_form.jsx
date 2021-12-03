import React from 'react';
import { withRouter } from 'react-router';

class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submitEvent(this.state)
        .then(() => this.props.history.push("/events"));
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <div className="Main-Event-Form">
                <div className="header2">
                <h3>Basic Info</h3>
                </div>
                <div className="Event-Form">
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="title"
                    /> 
                    </label>
                    <br/>
                    <label>
                    <input 
                    type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="description"
                    />
                    </label>
                    <br/>
                    <label>
                    <input 
                    type='date'
                    value={this.state.date}
                    onChange={this.update('date')}
                    />
                  </label>
                  <br/>
                  <label>
                    <input 
                    type='text'
                    value={this.state.location}
                    onChange={this.update('location')}
                    placeholder="location"
                    />
                    </label>
                    <br/>
                    <label>
                    <input 
                    type='integer'
                    value={this.state.capacity}
                    onChange={this.update('capacity')}
                    placeholder="capacity"
                    />
                    </label>
                    <br />
                    <button type='submit' value={this.props.formType} className="submit-event-button">{this.props.formType}</button>
                </form>
                </div>
            </div>
        )
    }
}

export default withRouter(EventForm)