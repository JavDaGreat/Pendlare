import { useNavigate } from "react-router-dom"
function ShowStop({id,name,dist}){
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/departures",{state:id})
  }

  return(
  <div  className=" shadow-lg bg-gray-200  border-black border-2 py-4 px-2 my-2 flex justify-center items-center flex-col" >
    <p className="py-2 px-2 my-4">{name} ({dist}m) </p>

    <button onClick={handleClick}  className=" bg-black py-2 px-4 text-white shadow-lg  rounded-md hover:-translate-y-0.5">välj</button>
  </div>
  )
}
export default ShowStop