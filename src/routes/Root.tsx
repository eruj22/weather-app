import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
