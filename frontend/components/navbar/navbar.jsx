import React, { useState } from "react";
import { Link } from "react-router-dom";



// class Navbar extends React.Component{
//     render() {
//         return (
//            <Navbar>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="#home">My Brand</a>
//               </Navbar.Brand>
//             </Navbar.Header>
//             <Nav>
//               <NavItem href="#">
//                 Home
//               </NavItem>
//               <NavItem href="#">
//                 About
//               </NavItem>
//               <NavItem href="#">
//                 FAQ
//               </NavItem>
//               <NavItem href="#">
//                 Contact Us
//               </NavItem>
//             </Nav>
//           </Navbar>
//         );
//     }
// }

class Navbar extends React.Component{
constructor(props){
    super(props);
    
}

is_logged_in(){
if (this.props.user) {
    return (
        <button onClick={this.props.LogOut}>Log Out</button>
    )
} else {
    return (
        <div>
            <li> <Link to="/signup">SignUp</Link></li> 
            <li> <Link to="/login">Login</Link></li>
            

        </div>
        )
    }
}



    render() {
        return (
            <div>
       
              <ul id="nav">
                <Link to="/" className="header-link">
                    <h2>MeetingBrite</h2>
                </Link>
                <div className='button1'>
    <a href='https://github.com/aroellig'><button>Github</button></a>
    <a href='https://www.linkedin.com/in/andrew-roellig-a4a0811b7/'><button>Linkedin</button></a>
    </div>
            {this.is_logged_in()}
               
              </ul>
            </div>
        );
    }
}


export default Navbar;