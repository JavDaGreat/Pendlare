import { useState } from "react";
import ShowRoute from "../Components/ShowRoute";
import { useNavigate } from "react-router-dom";

function Reseplaneran() {
  const [orgin, setOrgin] = useState("");
  const [destination, setDestination] = useState("");
  const [trips, setTrips] = useState();
  const navigate = useNavigate();

  const fetchData = async (value) => {
    const resp = await fetch(
      `https://api.resrobot.se/v2.1/location.name?input=${value}&format=json&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958`
    );
    const data = await resp.json();
    return data.stopLocationOrCoordLocation;
  };
  const handleChangeOrgin = (value) => {
    setOrgin(value);
  };
  const handleChangeDestination = (value) => {
    setDestination(value);
  };
  const handleSearch = async () => {
    const fetchOrgin = await fetchData(orgin);
    const fetchDestination = await fetchData(destination);
    const orginID = fetchOrgin[0].StopLocation.extId;

    const destinationID = fetchDestination[0].StopLocation.extId;
    const resp = await fetch(
      `https://api.resrobot.se/v2.1/trip?format=json&originId=${orginID}&destId=${destinationID}&passlist=true&showPassingPoints=true&accessId=c08cacd2-cbd4-437f-90d8-3b88a1fd2958`
    );
    const data = await resp.json();
    setTrips(data.Trip);
  };
  const content = trips?.map((trip) => {
    let info = trip.LegList.Leg;

    return <ShowRoute info={info} key={Reseplaneran} />;
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <button
        className="rounded bg-black py-2 px-4 text-white my-8 "
        onClick={() => {
          navigate("/");
        }}>
        back
      </button>
      <h3 className="text-center font-bold text-2xl">Sök Din Resa</h3>
      <div className="flex items-center justify-center flex-col gap-4 bg-gray-300 w-[500px] h-[500px]  rounded-md ">
        <label htmlFor="From">From:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[90%] p-3"
          type="text"
          id="From"
          value={orgin}
          onChange={(e) => handleChangeOrgin(e.target.value)}
        />

        <label htmlFor="till">Till:</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[90%]"
          id="till"
          value={destination}
          onChange={(e) => handleChangeDestination(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white p-2 w-[100px] h-[50px] rounded-md mt-4 ">
          Sök
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default Reseplaneran;
