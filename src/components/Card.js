let Card=(props)=>
    {
      return(<div className="card bg-orange-500 w-72  h-96  m-8 rounded-xl hover:bg-orange-400">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resdata.cloudinaryImageId} alt="reiomg"/>
        <div className="i  p-4 text-center text-pretty" >
        <h4 className=" font-semibold" >{props.resdata.name}</h4>
        <h4>{props.resdata.locality}</h4>
        <p className="font-normal">{props.resdata.cuisines.slice(0,4).join(", ")}</p>
        <p className=" font-medium">{props.resdata.avgRating}</p>
        <p>{props.resdata.deliveryTime}</p>
        <p>{props.resdata.costForTwo}</p>
  
        </div>
      </div>)
    }
export let NewCard=()=>
  {
    return (props)=>
      {
        return (<div>
          <label className=" absolute  bg-white  p-2 m-1 rounded-lg ">OPEN NOW</label>
          <Card {...props}/>
        </div>)
      }
  }
export default Card
