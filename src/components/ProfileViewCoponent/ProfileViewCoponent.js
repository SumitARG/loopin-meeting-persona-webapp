import "./ProfileViewCoponent.scss";
import PERSONA_1 from "../../assets/images/The Captivating Creator.png";
import PERSONA_2 from "../../assets/images/The Dynamic Agenda Artist.png";
import PERSONA_3 from "../../assets/images/The Conflict Whisperer.png";
import PERSONA_4 from "../../assets/images/The Outcome Orchestrator.png";
import PERSONA_5 from "../../assets/images/The Celebration Connoisseur.png";
import PERSONA_6 from "../../assets/images/The Super Productive Prodigy.png";
import PERSONA_7 from "../../assets/images/The Creative Maverick.png";
import PERSONA_8 from "../../assets/images/The Chill Zen Master.png";
import PERSONA_9 from "../../assets/images/The Spontaneous Frame Jumper.png";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import SecondaryHyperlink from "../CommonComponents/SecondaryHyperlink/SecondaryHyperlink";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE, PERSONAS_DATA } from "../../config/Constants";
import Insights from "../CommonComponents/Insights/Insights";

const ProfileViewCoponent = () => {
  const [computedPersona] = useState(
    localStorage.getItem(LOCAL_STORAGE.COMPUTED_PERSONA)
  );

  const [personaDetails] = useState(PERSONAS_DATA[computedPersona]);

  const getPersonaImage = () => {
    switch(computedPersona) {
      case 'The Captivating Creator' :
        return PERSONA_1;
      case 'The Dynamic Agenda Artist':
        return PERSONA_2;
      case 'The Conflict Whisperer':
        return PERSONA_3;
      case 'The Outcome Orchestrator':
        return PERSONA_4;
      case 'The Celebration Connoisseur':
        return PERSONA_5;
      case 'The Super Productive Prodigy':
        return PERSONA_6;
      case 'The Creative Maverick':
        return PERSONA_7;
      case 'The Chill Zen Master':
        return PERSONA_8;
      case 'The Spontaneous Frame Jumper':
        return PERSONA_9;
      default:
        return '';
    }
  }

  console.log(personaDetails);

  return (
    <div className="profile-view-component">
      <div className="preview-section">
        <div className="preview-header">
          <div className="header-container">
            <div className="header-background-1"></div>
            <div className="header-background-2"></div>
            <div className="header-background-3"></div>
          </div>
          <div className="persona-header-image">
            <img src={getPersonaImage()} alt="persona" />
          </div>
        </div>
        <div className="persona-name">{computedPersona}</div>
        <div className="persona-tagline">
          {personaDetails.tagLine}
        </div>
        <PrimaryButton buttonLabel="Download Profile" buttonWidth="385" />
        <div className="secondary-actions">
          <SecondaryHyperlink linkLabel="Share on Linkedin" />
          <SecondaryHyperlink linkLabel="Share on Twitter" />
          <SecondaryHyperlink linkLabel="Share a link to the quiz" />
        </div>
      </div>
      <div className="seprator">
        <hr className="seprator-line" />
      </div>
      <div className="description-section">
        <div className="persona-description">
          {
            personaDetails.description.map(item => <p key={item}>{item}</p>)
          }
        </div>
      </div>
      <div className="strength-insights">
          <Insights content={personaDetails.strengths} insightType="strengths"/>
      </div>
      <div className="weakness-insights">
          <Insights content={personaDetails.weaknesses} insightType="weakness"/>
      </div>
    </div>
  );
};

export default ProfileViewCoponent;
