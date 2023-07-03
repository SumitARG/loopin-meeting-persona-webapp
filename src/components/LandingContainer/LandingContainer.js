import { Outlet } from "react-router";
import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";
import "./LandingContainer.scss";
// import { Outlet } from "react-router-dom";

const LandingContainer = () => {
  return (
    <div>
      <LandingPageComponent />
      <Outlet/>
    </div>
  );
};

export default LandingContainer;
