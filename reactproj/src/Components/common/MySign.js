import React, {Component} from "react"

export  default class MySign extends Component {
    constructor(){
        super();
        console.log("Constructor")
    }

    componentWillMount() {
        console.log("componentWillMount")
        console.log(this.props.heading)
        
    }

    componentDidMount() {
        console.log("componentDidMount")
        document.querySelector('h3').style.color="red";
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    sendData =()=>{
        console.log(this.refs.userName.value)
        this.props.onSignInClick(this.refs.userName.value)
        //alert(this.ref.userName.value);
        console.log("sending Data........");
    }
    render() {
        //this.props.heading= "Wells Fargo"
        return <div> 
            
            <h3> {this.props.heading}</h3>
          
            <form className="form-inline">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter User Name" ref="userName"/>&nbsp;
                </div>
                <input type="password" className="form-control" placeholder="Enter Password"  ref="password"/>&nbsp;
                <button type="button" className="btn btn-primary" onClick={this.sendData}> {this.props.heading} </button>
            </form>
        </div>
    }
}