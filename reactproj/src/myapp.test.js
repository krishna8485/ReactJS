import React from "react"
import ReactDOM from "react-dom"
import MySign from "./Components/common/MySign"

describe ("Test Demo", () => {
    it("knows 2 plus 2 is 4", () => {
        expect (2+2).toBe(4)
    })
    it("should render MySign Component", ()=> {
        const div=document.createElement("div");
        ReactDOM.render(<MySign heading="TESTING"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})