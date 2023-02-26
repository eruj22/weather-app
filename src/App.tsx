import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import City from "./pages/city";
import CityError from "./pages/city/CityError";
import { cityLoader } from "./loaders/cityLoader";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import Root from "./routes/Root";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route
          path="/mesto/:name"
          element={<City />}
          loader={cityLoader}
          errorElement={<CityError />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
