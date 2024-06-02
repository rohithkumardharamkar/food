import { useEffect, useState } from "react"
import { API } from "./constants"

const useRest=(info)=>
{
    let [resData,setrData]=useState({})
    useEffect(()=>{
        fetchData()

    },[])
    const fetchData=()=>
        {
            let data=fetch(API+info).then((res)=>res.json())
            setrData(data)
        }

    return resData

}
export default useRest