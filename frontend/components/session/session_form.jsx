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
    .then(() => this.props.history.push("/"));
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
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="login-form-container">
        <img src="https://www.tasteofhome.com/wp-content/uploads/2017/12/shutterstock_633405500.jpg"/>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
           {this.props.formType} 
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="username"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="password"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="email address"
              />
            </label>
            <input className="session-submit" type="submit" value="continue" />
            <div className="divider">
              <h1>or</h1>
            </div>
            <div className="login-demo" >
            <button onClick={this.demoLogin}>Login Demo User</button>
            <br/>
            
             {this.props.navLink}
           
           
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
