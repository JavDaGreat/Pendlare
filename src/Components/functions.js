
async function geoLocation(){

  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    );
  })
  

}



async function nearbyStop(){

  const {coords} = await geoLocation() 




  const resp=await fetch(`https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${coords.latitude}&originCoordLong=${coords.longitude}&format=json&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958`)
  const data = await resp.json()

  return data

  


}
async function getDepartures(id){
  const resp=await fetch (`https://api.resrobot.se/v2.1/departureBoard?id=${id}&format=json&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958`)
  const data=await resp.json()
return data.Departure


}
function getBusStops(value){
  const resp =fetch(`https://api.resrobot.se/v2.1/location.name?input=${value}&format=json&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958`)

}
async function getRoute(orgin,destination){
  const resp =fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=${orgin}&destId=${destination}&passlist=true&showPassingPoints=true&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958 `)
  const data = await resp.json()
  console.log(data);

}
export {nearbyStop,getDepartures,getRoute}



