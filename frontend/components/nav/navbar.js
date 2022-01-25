import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "./nav.css";
import SearchContainer from "../search/search_container";



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
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

//   getLinks() {
//     if (this.props.loggedIn) {
//       return (
//         <div className="loggedIn">
//           {/* <Link to={"/recipes"} className="all-recipes">All Recipes</Link>
//           <Link to={"/profile"} className="profile">Profile</Link>
//           <Link to={"/recipes/new"} className="create">Create Recipe</Link> */}
//           <div onClick={this.logoutUser} className="logoutbtn">
//            <p className="logout-p">Logout</p>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="signUp">
//             <Link to={"/signup"} className="signup-div">
//               <p className="p-signup">Signup</p>
//             </Link>
//             <Link to={"/login"} className="login-div">
//               <p className="p-login">Login</p>
//             </Link>
//           <div onClick={this.demoLogin} className="demoLogin">
//             <p>Demo Login</p>
//           </div>
//             <Link to="/recipes" className="all-recipes">All Recipes</Link>
//         </div>
//       );
//     }
//   }
  render() {
    return (
      <div className="navbar-top">
        <div className="icon-app-name">
          <i className="fas fa-globe-americas" id="global-link"></i>
          <div className="homelink-global"><Link to="/" className="link-global-nav"><p className="text-global">MeetingBrite</p></Link></div>
        </div>
        {/* <div>{this.getLinks()}</div> */}
        <SearchContainer />
      </div>
    );
  }
}

export default withRouter(NavBar);
