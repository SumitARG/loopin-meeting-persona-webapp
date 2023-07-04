import { useState } from "react";
import LEFT_IMAGE from "../../../assets/images/persona_list_left_image.png";
import RIGHT_IMAGE from "../../../assets/images/persona_list_right_image.png";
import BOTTOM_IMAGE from "../../../assets/images/persona_list_bottom_image.png";
import { PERSONAS_DATA } from "../../../config/Constants";
import PERSONA_1 from "../../../assets/images/The Captivating Creator.png";
import PERSONA_5 from "../../../assets/images/The Celebration Connoisseur.png";
import PERSONA_8 from "../../../assets/images/The Chill Zen Master.png";
import PERSONA_3 from "../../../assets/images/The Conflict Whisperer.png";
import PERSONA_7 from "../../../assets/images/The Creative Maverick.png";
import PERSONA_2 from "../../../assets/images/The Dynamic Agenda Artist.png";
import PERSONA_4 from "../../../assets/images/The Outcome Orchestrator.png";
import PERSONA_9 from "../../../assets/images/The Spontaneous Frame Jumper.png";
import PERSONA_6 from "../../../assets/images/The Super Productive Prodigy.png";
import "./PersonaList.scss";

const PersonaList = ({closePersonaList}) => {
  const [personaList] = useState(Object.keys(PERSONAS_DATA));

  const getPersonaImage = (persona) => {
    switch (persona) {
      case "The Captivating Creator":
        return PERSONA_1;
      case "The Dynamic Agenda Artist":
        return PERSONA_2;
      case "The Conflict Whisperer":
        return PERSONA_3;
      case "The Outcome Orchestrator":
        return PERSONA_4;
      case "The Celebration Connoisseur":
        return PERSONA_5;
      case "The Super Productive Prodigy":
        return PERSONA_6;
      case "The Creative Maverick":
        return PERSONA_7;
      case "The Chill Zen Master":
        return PERSONA_8;
      case "The Spontaneous Frame Jumper":
        return PERSONA_9;
      default:
        return "";
    }
  };

  return (
    <div className="persona-list-container" onClick={closePersonaList}>
      <div className="persona-list-header">
        <div className="left-head-image">
          <img src={LEFT_IMAGE} alt="persona left" />
        </div>
        <div className="persona-head">All Personas</div>
        <div className="right-head-image">
          <img src={RIGHT_IMAGE} alt="persona right" />
        </div>
      </div>
      <div className="persona-separator">
        <hr />
      </div>
      <div className="persona-list-content">
        {personaList.map((item) => {
          return (
            <>
              <div className="persona">
                <div className="persona-image">
                  <img src={getPersonaImage(item)} alt={`persona ${item}`} />
                </div>
                <div className="persona-details-content">
                  <div className="persona-name">"{item}"</div>
                  <div className="persona-tagline">
                    {PERSONAS_DATA[item].tagLine}
                  </div>
                </div>
              </div>
              <div className="persona-separator">
                <hr />
              </div>
            </>
          );
        })}
      </div>
      <div className="bottom-image">
        <img src={BOTTOM_IMAGE} alt="persona bottom" />
      </div>
    </div>
  );
};

export default PersonaList;
