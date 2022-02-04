import React from 'react';
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push("/events"));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    this.props
    .loginDemoUser()
      .then(() => this.props.history.push("/events"));
  }

  render() {
    return (
      <div className="main-login-form">
         <div classname="login-title">
       
          </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
        
          <div className="form-type">
           {this.props.formType} 
           </div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input-username"
                placeholder="username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-password"
                placeholder="password"
              />
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input-email"
                placeholder="email address"
              />
            <input className="submit" type="submit" value={this.props.formType} />
            <div className="divider">
              <h1 className="or">or</h1>
            </div>
            <div className="login-demo" >
            <button className="demo-login" onClick={this.demoLogin}>Login Demo User</button>
            <br/>
            <div className="alt">
             {this.props.navLink}
             </div>
          </div>
          </div>
        </form>
        <div className="photo">
          <img className="photo" src="https://www.tasteofhome.com/wp-content/uploads/2017/12/shutterstock_633405500.jpg"/>
          </div>
        </div>
         
    );
  }
}

export default withRouter(SessionForm);
