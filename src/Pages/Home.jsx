import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col gap-6 ">
      <h3 className="text-center font-bold text-2xl">Pendlare</h3>

      <div className=" h-[500px] w-[500px] border-2 border-black  flex justify-center items-center flex-col gap-8 rounded-md ">
        <p>Hitta närmaste Hållplats</p>
        <button
          onClick={() => {
            navigate("/nearbystop");
          }}
          className="rounded bg-black text-white h-[50px] w-[130px] ">
          Hitta
        </button>
        <p>Planera din resa</p>
        <button
          onClick={() => {
            navigate("/reseplaneran");
          }}
          className="rounded bg-black text-white h-[50px] w-[130px] ">
          Reseplaneraren
        </button>
      </div>
    </div>
  );
}
export default Home;

{
  /* <div className="grid grid-cols-3 gap-4 items-center">
<img src={bus} alt="" />
<div className="flex justify-center items-center flex-col gap-4">
  <p className="text-center">Hitta närmaste Hållplatsen </p>
  <button
    onClick={() => {
      navigate("/nearbystop");
    }}
    className="rounded bg-black text-white h-[50px] w-[100px] ">
    Hitta
  </button>
  <p className="text-center">__Eller__</p>
  <p>Reseplaneraren</p>
  <button
    onClick={() => {
      navigate("/reseplaneran");
    }}
    className="rounded bg-black text-white h-[50px] w-[100px] ">
    Reseplaneraren
  </button>
</div>
<img src={union} alt="" />
</div>
); */
}
