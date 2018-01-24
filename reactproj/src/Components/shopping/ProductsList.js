import React, {Component} from "react"
import {connect} from "react-redux"
export class ProductsList extends Component {
    render() {
        let output = null;
        if(this.props.products.length >0){
            output= this.props.products.map((product)=> {
                return <tr key={product.id}> 
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><input type="button" 
                        onClick={()=>this.props.addToCart(product)}
                value="Add To Cart"/></td>
                </tr>
            })
        } else {
            output=<tr><td colSpan="3">No Data Found</td></tr>
        }
        return (<div> <h3> List of Products </h3>

        <table className="table table-bordered"> 
            <thead><tr><td>Name</td>
            <td>Price</td> 
            <td>Action</td> 
            </tr></thead>
            <tbody>
                {output}
                </tbody>
        </table>
                </div>)
    }
}

function mapStateToProps(state) {
    return {
        products:state.productReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart:(product) =>{
            let orderedItem ={
                id:product.id, name:product.name, price:product.price, quantity:1};
                dispatch({type: "ADD_TO_CART", payload: orderedItem});
            }
        }
    }

export default connect (mapStateToProps, mapDispatchToProps)(ProductsList)
//console.log("Productlist")
