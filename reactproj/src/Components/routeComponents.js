import React, {Component} from "react"
import {ProductsList} from "./shopping/ProductsList"
import {CartItems} from "./shopping/CartItems"
export class NotFound extends Component {
    render() {
        return <h1 className="well"> 404. Ooops!!! Not Found.</h1>
    }
}


export class Home extends Component {
    render() {
        return  <div className="row">
            <div className="col-sm-6">
                <ProductsList/>
            </div>

            <div className="col-sm-6 well">
                <CartItems/>
            </div>

        </div>
    }
}