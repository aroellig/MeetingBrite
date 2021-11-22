import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.event.action(this.state)
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return(
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    />
                    <input 
                    type='date'
                    value={this.state.date}
                    onChange={this.update('date')}
                    />
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                    <input 
                    type='text'
                    value={this.state.location}
                    onChange={this.update('location')}
                    />
                    <input 
                    type='integer'
                    value={this.state.capacity}
                    onChange={this.update('capacity')}
                    />
                    <button type='submit' onChange={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default EventForm