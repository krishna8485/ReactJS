import React from "react"
import {Signin} from "./Signin"
import {Signup} from "./Signup"
import {NotFound, Home, ManageProducts} from "./routeComponents"
import {Route,Link, Switch} from "react-router-dom";
export class App extends React.Component {
    render() {
        //return <h1> test </h1>
        return <div>
               <nav className="navbar navbar-inverse">
               <div className="navbar-header">
               <Link to="/" className="navbar-brand"> My React App</Link>
                <ul className="nav navbar-nav"> 
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/signin"> Sign In</Link></li>
                <li> <Link to="/signup"> Quick Sign Up</Link></li>
                <li> <Link to="/manage">Managed Products</Link></li>
                </ul>
                </div>
                </nav>
                <Switch>                
                {/*<Route exact path="/" render={() => <h1>Welcome home</h1>}/>*/}

                <Route exact path="/" component={Home}/>
                <Route  exact path="/signin" component={Signin}/>
                <Route  exact path="/signup" component={Signup}/>
                <Route  exact path="/manage" component={ManageProducts}/>
                <Route  exact path="*" component={NotFound}/>
                </Switch>
               </div>
                
    }
}