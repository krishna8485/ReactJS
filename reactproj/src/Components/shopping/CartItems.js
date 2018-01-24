import React, {Component} from "react"
import {connect} from "react-redux"
export class CartItems extends Component {
    render() {
        let output = null;
        let totalAmount = null;
        if(this.props.items.length >0){
            output= this.props.items.map((item)=> {
                totalAmount = (item.price * item.quantity) + totalAmount;
                return <tr key={item.id}>
                <td><button className="btn btn-danger btn-xs" 
                    onClick={()=>this.props.removeFromCart(item)}>X</button>
                {item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=> this.props.addOneMoreCart(item)}> + </button>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>                
                </tr>                
            })
        } else {
            output=<tr><td colSpan="4">No Data Found</td></tr>
        }
        return <div> <h3> Cart items are <span className="label label-primary">
        {this.props.items.length}</span></h3>       
       

        <table className="table table-bordered"> 
            <thead><tr><td>Name</td>
            <td>Price</td> 
            <td>Quantity</td> 
            <td>Amount</td>
            </tr></thead>
            <tbody>
                {output}
               <tr> 
                   <td colSpan="3">Total Amount </td>
               <td> {totalAmount} </td>
                </tr>
            </tbody>

        </table>
                </div>
    }
}

function mapStateToProps(state) {
    return {
        items:state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart:(item) =>{
            let orderedProduct ={
                id:item.id, name:item.name, price:item.price};
                dispatch({type: "REMOVE_FROM_CART", payload: orderedProduct});
            },
        

        addOneMoreCart:(item) =>{
            let orderedProduct ={
                id:item.id, name:item.name, price:item.price};
                dispatch({type: "ADD_ONE_MORE_CART", payload: orderedProduct});
            }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CartItems)
//console.log("CartItems")