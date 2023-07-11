import { collection, getDocs, query } from "firebase/firestore";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import PERSONA_1 from "../../assets/images/The Captivating Creator.png";
import PERSONA_5 from "../../assets/images/The Celebration Connoisseur.png";
import PERSONA_8 from "../../assets/images/The Chill Zen Master.png";
import PERSONA_3 from "../../assets/images/The Conflict Whisperer.png";
import PERSONA_7 from "../../assets/images/The Creative Maverick.png";
import PERSONA_2 from "../../assets/images/The Dynamic Agenda Artist.png";
import PERSONA_4 from "../../assets/images/The Outcome Orchestrator.png";
import PERSONA_9 from "../../assets/images/The Spontaneous Frame Jumper.png";
import PERSONA_6 from "../../assets/images/The Super Productive Prodigy.png";
import { LOCAL_STORAGE, PERSONAS_DATA } from "../../config/Constants";
import { firestore } from "../../firebase_setup/firebase";
import Insights from "../CommonComponents/Insights/Insights";
import LoopinRecommendations from "../CommonComponents/LoopinRecommendations/LoopinRecommendations";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import SecondaryHyperlink from "../CommonComponents/SecondaryHyperlink/SecondaryHyperlink";
import "./ProfileViewCoponent.scss";

const ProfileViewCoponent = () => {
  const [computedPersona] = useState(
    localStorage.getItem(LOCAL_STORAGE.COMPUTED_PERSONA)
  );

  const usersRef = collection(firestore, "Users");

  const [personaDetails] = useState(PERSONAS_DATA[computedPersona]);

  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboardData = async () => {
    const q = query(usersRef);
    const qSnapshot = await getDocs(q);
    const tempRecords = [];
    qSnapshot.forEach((doc) => {
      let data = doc.data();
      if (
        data.email
          .split("@")[1]
          .includes(
            localStorage.getItem(LOCAL_STORAGE.USER_EMAIL).split("@")[1]
          )
      ) {
        tempRecords.push(data);
      }
    });
    let tempLederboard = {};
    tempRecords.forEach((item) => {
      if (tempLederboard[item.persona]) {
        tempLederboard[item.persona] = tempLederboard[item.persona] + 1;
      } else {
        tempLederboard[item.persona] = 1;
      }
    });
    setLeaderboard(tempLederboard);
  };

  useEffect(() => {
    getLeaderboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadHandler = () => {
    const input = document.getElementById("mainApp");
    html2canvas(input).then((canvas) => {
      const imgData = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      var link = document.createElement("a");
      link.download = `${computedPersona}.png`;
      link.href = imgData;
      link.click();
    });
  };

  const getPersonaImage = (inputPersona = "") => {
    let switchItem = computedPersona;
    if (inputPersona !== "") {
      switchItem = inputPersona;
    }
    switch (switchItem) {
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
    <div className="profile-view-component" id="profile">
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
        <div className="persona-tagline">{personaDetails.tagLine}</div>
        <PrimaryButton
          buttonLabel="Download Profile"
          buttonWidth="385"
          onButtonClick={downloadHandler}
        />
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
          <p>Making meetings memorable through creative highlights.</p>
          {personaDetails.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="strength-insights">
        <Insights content={personaDetails.strengths} insightType="strengths" />
      </div>
      <div className="weakness-insights">
        <Insights content={personaDetails.weaknesses} insightType="weakness" />
      </div>
      <div className="loopin-container">
        <LoopinRecommendations
          recommendations={personaDetails.recommendations}
        />
      </div>
      <div className="leaderboard">
        <div className="leaderboard-header">Your Company leaderboard</div>
        <div className="leaderboard-separator">
          <hr className="seprator-line" />
        </div>
        {Object.keys(PERSONAS_DATA).map((item, i) => (
          <React.Fragment key={i}>
            <div className="leaderboard-content">
              <div
                className="img-div"
                style={{
                  backgroundColor: `${i % 2 === 0 ? "#d9edff" : "#fff3d9"}`,
                }}
              >
                <img src={getPersonaImage(item)} alt="persona" />
              </div>
              <div className="persona-name">"{item}"</div>
              <div className="count">
                x{leaderboard[item] > 0 ? leaderboard[item] : 0}
              </div>
            </div>
            <div className="leaderboard-persona-separator">
              <hr className="seprator-line" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfileViewCoponent;
