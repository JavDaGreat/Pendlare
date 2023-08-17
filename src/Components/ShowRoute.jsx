import { useState } from "react";

function ShowRoute({info}){
  console.log(info);

  
    const content =info.map((route)=>{
      console.log(route);
      return <div className="border-black border-2 py-2 m-2 ">
        <div><p>{route.Origin.name}&nbsp;-&nbsp;{route.Destination.name} </p>  <p>{route.Origin.time}&nbsp;-&nbsp;{route.Destination.time} </p></div>
        <div>
          <p>{route.name} </p>
        </div>
      </div>

    })
  
  return <div>{content}</div>
}
export default ShowRoute