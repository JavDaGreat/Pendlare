import { useLocation, useNavigate } from "react-router-dom";
import { getDepartures } from "../Components/functions";
import { useEffect, useState } from "react";

import ShowDep from "../Components/ShowDep";

function Departures() {
  const navigate = useNavigate();
  const [Departure, setDeParture] = useState();
  const { state } = useLocation();

  async function getBus() {
    const Departures = await getDepartures(state.id);
    setDeParture(Departures);
  }
  useEffect(() => {
    getBus();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getBus();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const content = Departure?.map((Departure) => {
    return (
      <ShowDep
        name={Departure.name}
        key={Departure.time}
        time={Departure.time}
        direction={Departure.direction}
      />
    );
  });

  return (
    <div className="flex flex-col gap-4 py-2 px-2 justify-center items-center  ">
      {content ? (
        <button
          className="bg-black text-white w-[100px] h-[50px] rounded-md"
          onClick={() => {
            navigate("/nearbystop");
          }}>
          back
        </button>
      ) : undefined}
      <h1 className=" font-bold text-2xl text-center p-4">{state.name}</h1>
      <div className="flex gap-8 flex-wrap p-4 "> {content}</div>
    </div>
  );
}
export default Departures;
