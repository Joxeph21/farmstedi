import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PlantFinder from "./pages/PlantFinder";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <PlantFinder />,
        },
      ],
    },
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
