import { useEffect } from "react";
import { nearbyStop } from "../Components/functions";
import { useState } from "react";
import ShowStop from "../Components/ShowStop";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useNavigate } from "react-router-dom";

function NearbyPage() {
  const [stops, setStops] = useState();
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const navigate = useNavigate();

  async function getStops() {
    setLoading(true);
    let { stopLocationOrCoordLocation } = await nearbyStop();
    setStops(stopLocationOrCoordLocation);
    setLoading(false);
  }

  useEffect(() => {
    getStops();
  }, []);
  const content = stops?.map((stop) => {
    return (
      <ShowStop
        dist={stop.StopLocation.dist}
        name={stop.StopLocation.name}
        key={stop.StopLocation.extId}
        id={stop.StopLocation.extId}
      />
    );
  });
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen ">
          <PacmanLoader
            color={"#1212"}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="rounded bg-black py-2 px-4 text-white mx-2 my-2">
            back
          </button>{" "}
          <h1 className=" text-center font-bold text-lg">Välj en hållplats</h1>{" "}
        </div>
      )}

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 py-2 px-2 mx-2">
        {content}
      </div>
    </div>
  );
}
export default NearbyPage;
