import React, {Component} from "react"
import ProductsList from "./shopping/ProductsList"
import CartItems from "./shopping/CartItems"
import axios from "axios"
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

export class ManageProducts extends Component{
    constructor() {
        super();
        this.apiUrl= "http://localhost:4000/wsproducts"

    }

    state={data:[]}
    componentDidMount () {
        axios.get(this.apiUrl).then((resp)=> {
            console.log("Success", resp)
            this.setState({data:resp.data})
        }, (err) => {
            console.log("Error", err)
        })
    }
    addProduct = () => {
       let product= { "id":null, "name":this.refs.pName.value, 
       "price": this.refs.pPrice.value} 
       axios.post(this.apiUrl, product).then((resp)=> {
           console.log("Adding")
           this.state.data.push(resp.data)
           this.setState({data:this.state.data})
           this.refs.pName.value=""
           this.refs.pPrice.value=""
       }), (err) => {
           console.log("error while adding")
       }
    }

    deleteProduct = (id) => {
        console.log("delete button clicked")    
        axios.delete(this.apiUrl+"/"+id).then((resp)=>{
            console.log("deleted ")
            let idx= this.state.data.findIndex((e) => e.id === id)
            this.state.data.splice(idx,1)
            //this.state.data.pop(resp.data)
            this.setState({data:this.state.data})
        }, (err) => {
            console.log("error while deleting")
        })
    }

    updateProduct = () => {
        let product= { "id":this.refs.pid.value, "name":this.refs.pName.value, 
        "price": this.refs.pPrice.value} 
        axios.put(this.apiUrl+"/"+ product.id, product).then((resp)=> {
            console.log("updateProduct")
            //this.state.data.push(resp.data)
           // this.setState({data:this.state.data})
            //this.refs.pName.value=""
            //this.refs.pPrice.value=""
        }), (err) => {
            console.log("error while adding")
        }
     }

    editProduct = (product) => {
       this.refs.pid.value=product.id;
       this.refs.pName.value=product.name;
       this.refs.pPrice.value=product.price;
}
    render() {
        let output = null;
        if(this.state.data.length >0){
            output= this.state.data.map((item)=> {
                return <tr key={item.id}> 
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-danger" onClick={() => this.deleteProduct(item.id)
                }>Delete</button><button className="btn btn-success" onClick={() => this.editProduct(item)
                }>Edit</button>                
                </td>
                </tr>
            })
        } else {
            output=<tr><td colSpan="3">No Data Found</td></tr>
        }
        return (<div> <h3> Manage Products </h3>
        <form className= "well">
            <input type="text" ref="pid" readOnly/>
            <input type="text" ref="pName" placeholder="Enter Product Name"/>
            <input type="text" ref="pPrice" placeholder="Enter Product Price"/>
            <button type="button" className="btn btn-primary" onClick={this.addProduct}>Add </button>
            <button type="button" className="btn btn-secondary" onClick={this.updateProduct}>Update </button>
        </form>

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