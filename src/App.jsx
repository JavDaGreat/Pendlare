import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NearbyPage from "./Pages/NearbyPage";
import Departures from "./Pages/Departures";
import Reseplaneran from "./Pages/Reseplaneran";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/nearbystop",
      element: <NearbyPage />,
    },
    {
      path: "/departures",
      element: <Departures />,
    },
    {
      path: "/reseplaneran",
      element: <Reseplaneran />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
