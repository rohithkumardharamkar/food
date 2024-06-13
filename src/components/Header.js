import {useEffect, useState } from "react"
import { LOGO_URL } from "../utilities/constants"
import useStatus from "../utilities/useStatus";
import { Link } from "react-router-dom";

let Header=()=>
    {
      let [b,setB]=useState("Login")
      console.log(useState("Login"));
      console.log("render")
      let s=useStatus()
      useEffect(()=>
      {
        console.log("UseEffect");
      },[b])
      
      return(<div className="head shadow-lg m-10">
        <div className="logo">
          <img src={LOGO_URL} alt="logo"/>
        </div>
        <div className="listcon">
          <ul>
            <li>{s?" 🟢 Online":" 🔴 Offline"}</li>
            <li><Link to='/food'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><button onClick={()=>{b==="Login"?setB("Logout"):setB("Login")}} id="login">{b}</button></li>
          </ul>
        </div>
  
      </div>)
    }
export default Header