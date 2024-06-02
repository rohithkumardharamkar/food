import { Component } from "react"

class Child1 extends Component
{
    constructor(props)
    {
        super(props)
        console.log("Child -2 Constructor");
    }
    componentDidMount()
    {
        console.log("Child -2 ComponentDid Mount");
    }
    render()
    {
        console.log("Child -2 Render method");
        return(<div></div>)
    }
}
export default Child1