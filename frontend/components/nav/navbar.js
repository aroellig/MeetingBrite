import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "./nav.css";
import SearchContainer from "../search/search_container";



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    // this.demoLogin = this.demoLogin.bind(this);
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }
  
//   demoLogin(e){
//     e.preventDefault();
//     this.props.loginDemoUser();
//   }

  getLinks() {

      return (
        <div className="Links">
            <Link to="/events/new" className="new-event">Create an Event</Link>
            <br/>
            <Link to="/profile" className="profile">Profile</Link>
            <br/>
            <Link to="/events" className="home">Home</Link>
            <br/>
            <div onClick={this.logoutUser} className="logoutbtn">
           <p className="logout-p">Logout</p>
          </div>
           
        </div>
      );
    }
  
  render() {
    return (
      <div className="navbar-top">
        <div className="icon">
          <h1>Meetingbrite</h1>
        </div>
        <div>{this.getLinks()}</div>
        <SearchContainer />
        
      </div>
    );
  }
}

export default withRouter(NavBar);
