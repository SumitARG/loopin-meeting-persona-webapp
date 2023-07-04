import "./ProfileViewCoponent.scss";
import SUPER_PRODIGY from "../../assets/images/The Super Productive Prodigy.png";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import SecondaryHyperlink from "../CommonComponents/SecondaryHyperlink/SecondaryHyperlink";

const ProfileViewCoponent = () => {
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
            <img src={SUPER_PRODIGY} alt="persona" />
          </div>
        </div>
        <div className="persona-name">The Super Productive Prodigy</div>
        <div className="persona-description">Maximizing efficiency and goal-oriented productivity.</div>
        <PrimaryButton buttonLabel="Download Profile" buttonWidth="385" />
        <div className="secondary-actions">
          <SecondaryHyperlink linkLabel="Share on Linkedin"/>
          <SecondaryHyperlink linkLabel="Share on Twitter"/>
          <SecondaryHyperlink linkLabel="Share a link to the quiz"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewCoponent;
