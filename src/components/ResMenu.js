import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { API, RESMENU } from '../utilities/constants'

const ResMenu = () => {
  useEffect(()=>
  {

  },[])
  let [res,setRes]=useState(null)
  let fetchdata=()=>
    {
      let data=fetch(RESMENU).then((res)=>res.json)
      setRes(data)
    }
    console.log(res);
    if(res==null)
      {
        return <Shimmer/>
      }
  return (
    <div>
      <h1>
        This is our ResMenu
      </h1>
    </div>
  )
}

export default ResMenu