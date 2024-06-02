import {useState } from "react"
import { LOGO_URL } from "../utilities/constants"
import useStatus from "../utilities/useStatus";

let Header=()=>
    {
      let [b,setB]=useState("Login")
      console.log(useState("Login"));
      let s=useStatus()
      
      return(<div className="head shadow-lg m-10">
        <div className="logo">
          <img src={LOGO_URL} alt="logo"/>
        </div>
        <div className="listcon">
          <ul>
            <li>{s?" 🟢 Online":" 🔴 Offline"}</li>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Contact us</li>
            <li><button onClick={()=>{b==="Login"?setB("Logout"):setB("Login")}} id="login">{b}</button></li>
          </ul>
        </div>
  
      </div>)
    }
export default Header