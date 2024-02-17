import moment from "moment";

function ShowRoute({ info }) {
  let TransportMedel = [];
  const format = "HH:mm:ss";
  const orginTime = info[0].Origin.time;
  const DestinationTime = info[info.length - 1].Destination.time;
  const orginTimeMoment = moment(orginTime, format);
  const DestinationTimeMoment = moment(DestinationTime, format);
  const timeDifference = DestinationTimeMoment.diff(orginTimeMoment);
  const duration = moment.duration(timeDifference);
  let formattedDuration = ` ( ${duration.hours()}H , ${duration.minutes()}Min )`;
  if (duration.hours() === 0) {
    formattedDuration = ` ( ${duration.minutes()}Min )`;
  }

  info.map((route) => {
    const temp = route.name.replace("Länstrafik -", "");

    TransportMedel.push(temp);
  });

  return (
    <div className="w-full flex flex-col gap-4 p-3 border-2  border-black ">
      <div>
        <p className="font-bold">
          {info[0].Origin.name}&nbsp;-&nbsp;
          {info[info.length - 1].Destination.name}{" "}
        </p>{" "}
        <p>
          {info[0].Origin.time}&nbsp;-&nbsp;
          {info[info.length - 1].Destination.time} {formattedDuration}{" "}
        </p>
        <p>{TransportMedel.toString()} </p>
      </div>
    </div>
  );
}
export default ShowRoute;
