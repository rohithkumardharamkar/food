import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state=
        {
            "info":
            {
                "name":"Loading....",
                "place":"Loading...."
            }
        }
        console.log("chid constructor -1");
    }

     async componentDidMount()
    {
       let data=await fetch("https://api.github.com/users/rohithkumardharamkar").then((res)=>res.json())
   this.setState({"info":data})
   console.log(data);
   
    }
    render() {
      
        let { name, location,avatar_url } = this.state.info
        return (<div>
            <img src={avatar_url} alt="profile"/>
            <h1>name:{name}</h1>
            <h1>place:{location}</h1>
           

        </div>)
    }

}
export default UserClass