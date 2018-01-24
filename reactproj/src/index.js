import React from "react"
import ReactDOM from "react-dom"
import {App} from "./Components/App"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom";
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"


let productsData = [{"id" :1, "name": "Nokia 3", "price": "3000"},
{"id" :2, "name": "Nokia 4", "price": "3001"},
{"id" :3, "name": "Nokia 5", "price": "3002"},
{"id" :4, "name": "Nokia 6", "price": "3003"},
{"id" :5, "name": "Nokia 7", "price": "3004"} ]

let cartData=[]

let productReducer =  (state=productsData, action ) =>
{
    switch (action.type) {
        case "ADD_TO_CART" :
            console.log("Product Recuder ADD TO CART");
            let p = state.filter((product) => product.id !==action.payload.id)
            return p;
            //return state;

        case "REMOVE_FROM_CART" :
            //console.log("Product Recuder ADD TO CART");
            state = [...state, action.payload];
            return state;
        
        default : 
            console.log("Product Reducer DEFAULT");
            return state;
    }
        
}

let cartReducer =  (state=cartData, action ) =>
{
    switch (action.type) {
        case "ADD_TO_CART" :
            console.log("Product Recuder ADD TO CART");
            state = [...state, action.payload];
            return state;
        case "REMOVE_FROM_CART" :
            // console.log("Product Recuder ADD TO CART");
             let p1 = state.filter((item) => item.id !==action.payload.id)
             return p1;
        case "ADD_ONE_MORE_CART" :
            //console.log("Product Recuder ADD TO CART");
            //state = [...state, action.payload];
            //return state;
            //let p = state.((item) => item.id  !==action.payload.id)
           // return p;
        default : 
            console.log("cart Reducer DEFAULT");
            return state;
    }
        
}

let appStore = createStore(combineReducers({productReducer, cartReducer}));

ReactDOM.render(<Provider store={appStore}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById("root"))
