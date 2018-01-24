console.log("sigin")

import React from "react"
import MySign from "./common/MySign"
export class Signin extends React.Component {
    state = { loggedUserName : "Guest" }
    handleSignIn=(uname)=> {
        console.log("Recieved uname", uname);
        this.setState({loggedUserName:uname})
    }
    render() {
        return <div> 
            <p> Logged In User is {this.state.loggedUserName}</p>
            <MySign heading="Sign In" onSignInClick={this.handleSignIn}/> </div>
       
            
    }
}