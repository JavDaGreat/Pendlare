import moment from "moment"

function ShowRoute({info}){
 
  let TransportMedel=[]
  const format = "HH:mm:ss";
  const orginTime= info[0].Origin.time
  const DestinationTime=info[info.length-1].Destination.time
  const orginTimeMoment = moment(orginTime, format);
  const DestinationTimeMoment = moment(DestinationTime, format);
  const timeDifference = DestinationTimeMoment.diff(orginTimeMoment);
  const duration = moment.duration(timeDifference);
  let formattedDuration = ` ( ${duration.hours()}H , ${duration.minutes()}Min )`
  if(duration.hours()=== 0){
     formattedDuration = ` ( ${duration.minutes()}Min )`


  }
 

  
    info.map((route)=>{
      TransportMedel.push(route.name)
      

    })
  
  return <div className="border-black border-2 py-2 m-2 ">
  <div><p className="font-bold">{info[0].Origin.name}&nbsp;-&nbsp;{info[info.length-1].Destination.name} </p>  <p>{info[0].Origin.time}&nbsp;-&nbsp;{info[info.length-1].Destination.time} {formattedDuration} </p></div>
  <div>
    <p>{TransportMedel.toString()} </p>
  </div>
</div>
}
export default ShowRoute