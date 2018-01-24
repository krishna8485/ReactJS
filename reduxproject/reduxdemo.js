const redux= require("redux");  
const createStore = redux.createStore;
console.log("First Redux Example")
//1. Data
var initialState={count:1}
//Action Types
const incType="INCREMENT"
const addType="ADD"

//2.Action Creators 
function increment() {
    return {type: incType}
}

function add(num){
    return {type: addType, value:num}
}
//3.Reducuer
let mathReducer= (state=initialState, action) => {
    switch (action.type) {
        case addType:
            return {count:state.count+ action.value}       
        case incType :
            return {count:state.count+1}
        default:
            return state
    }
}
//4.Register Reducer in Store
let myStore = createStore(mathReducer);

console.log("My Store", myStore.getState().count);

//5.State Updates Notification
myStore.subscribe(()=> {console.log("[subscribe]", myStore.getState())})

//6.Tigger action
//myStore.dispatch({type:"INC_COUNTER"})
//myStore.dispatch({type:"ADD_COUNTER", value:500})
myStore.dispatch(increment())
myStore.dispatch(add(300))