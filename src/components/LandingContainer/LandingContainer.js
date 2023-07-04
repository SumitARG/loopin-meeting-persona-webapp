import { useState } from "react";
import { Outlet } from "react-router";
import PersonaList from "../CommonComponents/PersonList/PersonaList";
import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";
import "./LandingContainer.scss";
// import { Outlet } from "react-router-dom";

const LandingContainer = () => {

  const [showPersona, setShowPersona] = useState(false);

  const showButtonHandler = () => {
    let tempShowPersona = showPersona;
    setShowPersona(!tempShowPersona);
  }

  return (
    <div>
      <LandingPageComponent showPersona={showButtonHandler}/>
      <Outlet />
      <div className="personas-container">
      {showPersona && <PersonaList closePersonaList={showButtonHandler}/>}
      </div>
    </div>
  );
};

export default LandingContainer;
