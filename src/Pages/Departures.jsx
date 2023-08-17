import { useLocation, useNavigate } from "react-router-dom"
import { getDepartures } from "../Components/functions"
import { useEffect, useState } from "react"


import ShowDep from "../Components/ShowDep";


function Departures(){
  
  const navigate=useNavigate()
  const[Departure,setDeParture]= useState()
  const {state}= useLocation()

  async function getBus(){
    console.log("here");
      const Departures= await getDepartures(state)
      setDeParture(Departures)

  }
  useEffect(()=>{
    getBus()

  },[])
  useEffect(()=>{
    const interval= setInterval(()=>{
      getBus()

    },60000)
    return ()=>{
      clearInterval(interval)
    }
    

  },[])
  const content =Departure?.map((Departure)=>{
    console.log(Departure.name);
    
    return <ShowDep name={Departure.name} key={Departure.time} time={Departure.time} direction ={Departure.direction} />

  })
  

  return <div className="flex flex-col gap-4 py-2 px-2  ">
   
    
{ content ?  <button className="bg-black text-white w-[100px] h-[50px] rounded-md" onClick={()=>{navigate("/nearbystop")}}>back</button> : undefined }
{content}
  </div>
}
export default Departures