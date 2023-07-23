import { collection, getDocs, query } from "firebase/firestore";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import ShareLink from "react-linkedin-share-link";
import PERSONA_1 from "../../assets/images/The Captivating Creator.png";
import PERSONA_5 from "../../assets/images/The Celebration Connoisseur.png";
import PERSONA_8 from "../../assets/images/The Chill Zen Master.png";
import PERSONA_3 from "../../assets/images/The Conflict Whisperer.png";
import PERSONA_7 from "../../assets/images/The Creative Maverick.png";
import PERSONA_2 from "../../assets/images/The Dynamic Agenda Artist.png";
import PERSONA_4 from "../../assets/images/The Outcome Orchestrator.png";
import PERSONA_9 from "../../assets/images/The Spontaneous Frame Jumper.png";
import PERSONA_6 from "../../assets/images/The Super Productive Prodigy.png";
import PERSONA_10 from "../../assets/images/The Unconventional Visionary.png";
import LINKEDIN_ICON from "../../assets/images/svg/Linkedin.svg";
import SHARE_ICON from "../../assets/images/svg/share_icon.svg";
import TWITTER_ICON from "../../assets/images/svg/twitter.svg";
import {
  LOCAL_STORAGE,
  LOOPIN_QUIZ_SHARE_LINK,
  PERSONAS_DATA,
} from "../../config/Constants";
import { firestore } from "../../firebase_setup/firebase";
import LoopinInsights from "../CommonComponents/LoopinInsights/LoopinInsights";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import "./ProfileViewCoponent.scss";

const ProfileViewCoponent = () => {
  const [computedPersona] = useState(
    localStorage.getItem(LOCAL_STORAGE.COMPUTED_PERSONA)
  );

  const usersRef = collection(firestore, "Users");

  const [personaDetails] = useState(PERSONAS_DATA[computedPersona]);

  const [leaderboard, setLeaderboard] = useState([]);

  const [copyMessageFlag, setCopyMessageFlag] = useState(false);

  const getTooltip = (tooltipText) => (
    <Tooltip id="tooltip">
      <strong>{tooltipText}</strong>
    </Tooltip>
  );

  const getLeaderboardData = async () => {
    const q = query(usersRef);
    const qSnapshot = await getDocs(q);
    const tempRecords = [];
    let tempLederboard = {};
    let localEmailEnd = localStorage.getItem(LOCAL_STORAGE.USER_EMAIL).split("@")[1];
    if(localEmailEnd.includes("gmail") || localEmailEnd.includes("yahoo") || localEmailEnd.includes("hotmail")){
      tempLederboard[computedPersona] = 1;
    }
    else{
      qSnapshot.forEach((doc) => {
        let data = doc.data();
        if (
          data.email !== "" &&
          data.email
            .split("@")[1]
            .includes(
              localEmailEnd
            )
        ) {
          tempRecords.push(data);
        }
      });
      tempRecords.forEach((item) => {
        if (tempLederboard[item.persona]) {
          tempLederboard[item.persona] = tempLederboard[item.persona] + 1;
        } else {
          tempLederboard[item.persona] = 1;
        }
      });
    }
    setLeaderboard(tempLederboard);
  };

  useEffect(() => {
    document
      .getElementById("header")
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
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
      case "The Unconventional Visionary":
        return PERSONA_10;
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
        <div className="secondary-actions">
          <OverlayTrigger
            placement="bottom"
            overlay={getTooltip("Share your profile")}
          >
            <a
              className="twitter-share-button"
              target="_blank"
              rel="noreferrer"
              href={
                "https://twitter.com/intent/tweet?size=large&text=Thrilled to discover I'm '" +
                computedPersona +
                "'! " +
                PERSONAS_DATA[computedPersona]?.tweetHighlights +
                ". Take the meeting personality quiz and find out your style too!&hashtags=AI,Meetings&url=https://persona.loopinhq.com&via=LoopinHQ&related=twitterapi,twitter"
              }
            >
              <img src={TWITTER_ICON} alt="Twitter" />
            </a>
          </OverlayTrigger>
          <ShareLink link={LOOPIN_QUIZ_SHARE_LINK}>
            {(link) => (
              <OverlayTrigger
                placement="bottom"
                overlay={getTooltip("Share on Linkedin")}
              >
                <a href={link} target="_blank" rel="noreferrer">
                  <img src={LINKEDIN_ICON} alt="Linkedin" />
                </a>
              </OverlayTrigger>
            )}
          </ShareLink>
          <div className="share-copy">
            <OverlayTrigger placement="bottom" overlay={getTooltip("Copy URL")}>
              <img
                src={SHARE_ICON}
                alt="share"
                onClick={() => {
                  navigator.clipboard.writeText(LOOPIN_QUIZ_SHARE_LINK);
                  setCopyMessageFlag(true);
                  setTimeout(() => {
                    setCopyMessageFlag(false);
                  }, 5000);
                }}
              />
            </OverlayTrigger>
            {copyMessageFlag && <div className="copied-message">Copied</div>}
          </div>
        </div>
        <PrimaryButton
          buttonLabel="Download Profile"
          buttonWidth="385"
          onButtonClick={downloadHandler}
        />
      </div>
      <div className="description-section">
        <div className="persona-description">
          <p>Making meetings memorable through creative highlights.</p>
          {personaDetails.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="loopin-insights">
            <LoopinInsights strengths={personaDetails.strengths} recommendations={personaDetails.recommendations}/>
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
                <img
                  className="img-div"
                  src={getPersonaImage(item)}
                  alt="persona"
                />
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
