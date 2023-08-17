import bus from "../assets/bus.png"
import union from "../assets/Union.png"
import { useNavigate } from "react-router-dom"
function Home (){
  const navigate =useNavigate()


  return <div className="grid grid-cols-3 gap-4 items-center">
    <img src={bus} alt="" />
    <div className="flex justify-center items-center flex-col gap-4">
      <p className="text-center">Hitta närmaste Hållplatsen </p>
    <button onClick={()=>{navigate("/nearbystop")}} className="rounded bg-black text-white h-[50px] w-[100px] ">Hitta</button>
    <p className="text-center">__Eller__</p>
    <p>Reseplaneran</p>
    <button onClick={()=>{navigate("/reseplaneran")}} className="rounded bg-black text-white h-[50px] w-[100px] ">Reseplaneran</button>

    </div>
    <img src={union} alt="" />
    
  </div>
}
export default Home