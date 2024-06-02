import { useEffect, useState } from "react"

function useStatus()
{
    let [status,setStatus]=useState(true)
    useEffect(()=>
    {
        window.addEventListener("offline",()=>{
            setStatus(false)
        })
        window.addEventListener("online",()=>
        {
            setStatus(true)
        })

    },[])
    return status

}
export default useStatus