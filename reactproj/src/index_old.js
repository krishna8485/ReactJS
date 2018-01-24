//console.log("testing");

import React from "react"
import ReactDOM from "react-dom"

import "../node_modules/bootstrap/dist/css/bootstrap.css"

//let element = React.createElement("i", null, "My First Example");

//let root = document.getElementById("root");


//ReactDOM.render(element, root);

//ReactDOM.render(<p><b> First React Example JSX</b></p>, root);

//ReactDOM.render(<div><p><b> First React Example JSX</b></p>
               // <p> welcome to react {23+45}</p>
                 //   </div>, root);
let App=()=>{
    return <h1 className="well"> My First React component</h1>;
}

//let App1=()=>{
   // return (
   // <h1> My First React component1</h1>);
//}

//ReactDOM.render(App1(), root);
ReactDOM.render(<App/>, root);