import Card, { NewCard } from "./Card"
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { API } from "../utilities/constants";
import useStatus from "../utilities/useStatus";
let Body = () => {
  const [res, setRes] = useState([]);
  let [data,setData]=useState("");
  let [f,setF]=useState([])
  let s=useStatus()

  useEffect(()=>{
    fetchData()
  },[])
  let fetchData= async()=>
  {
    let data= await fetch(API)
    let json= await data.json()
    setRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setF(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  let NewComp=NewCard(Card)
  function fun(e)
  {
    setData(e.target.value)

    
  }
  function fun1()
  {
    let ff=res.filter((result)=>result.info.name.toLowerCase().includes(data.toLowerCase()))
   setF(ff)
  
  }
  if(s==false)
    {
      return(<div id="status">

        <h1>You are Offline Please connect to Stable Internet Connection</h1>
        <h2> 😩 😩 😩</h2>
        </div>)
    }
  if (res.length === 0) {
    return <Shimmer />;
  }

  return (<div className="body">

    <div className='filters'>
      <div>
        <input type="text" className="  rounded-lg px-5 py-2 text-black  m-5" placeholder="Search by Restraunt Name" onChange={fun} value={data}/>
        <button onClick={fun1} className=" bg-amber-500 w-20 px-4 py-2 rounded-lg">Search</button>
      </div>
      <div>
        <button onClick={() => {let a = f.filter((res) => res.info.avgRating >=4)
    
          setF(a)
        }} className=" bg-amber-500 w-30 px-4 py-2 rounded-lg">Top Restaurant</button>
      </div>
    </div>
    <div className="card-items">
      {
        f.map((i) => 
        {
          return(<div>
            {i.info.availability.opened?<NewComp resdata={i.info}/>:<Card resdata={i.info} />}
              
            </div>)
        }
      )
      }
    </div>
   
  </div>)
}
export default Body
