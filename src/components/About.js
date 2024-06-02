import React from "react"
import UserClass from "./UserClass";
import Child1 from "./Child1";

class About extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("Parent class Constructor");
    }
    componentDidMount()
    {
        console.log("Component did mount parent");

    }
    render()
    {
        console.log("Parent class Render");
        return(<div>
            <UserClass/>
            <Child1/>
            
        </div>

        )
    }
}
export default About
