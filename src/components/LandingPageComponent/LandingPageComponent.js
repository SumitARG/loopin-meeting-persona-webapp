import "./LandingPageComponent.scss";
import HOME_IMAGE_LEFT from "../../assets/images/Character Set 1 - 6.png";
import HOME_IMAGE_RIGHT from "../../assets/images/Character Set 1 - 12.png";
import HOME_IMAGE_BOTTOM from "../../assets/images/Character Set 1 - 16.png";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import SecondaryHyperlink from "../CommonComponents/SecondaryHyperlink/SecondaryHyperlink";

const LandingPageComponent = () => {
  const buttonClickHandler = () => {
    document
      .getElementsByClassName("quiz-screen question-1")[0]
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  return (
    <div className="container landing-page-container">
      <div className="home-page-header">What is your meeting persona? 🚀</div>
      <div className="landing-page-content">
        <p>
          ✨ Uncover your unique meeting style and unleash your true potential.
          Imagine a world where every team member's distinct approach adds value
          to meetings.
        </p>
        <p>
          💡 By understanding your own meeting persona, enhance collaboration
          and make meetings even more effective and enjoyable. Embrace this
          opportunity to discover your meeting persona and embark on a
          transformative journey.
        </p>
        <p>
          🎉 Let's get started and unlock your meeting greatness together! 💪🗝️
        </p>
      </div>
      <div className="button-arrangement">
        <div className="layer-1">
          <div
            className="image-container rotate-left"
            style={{
              backgroundImage: `linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), url('${HOME_IMAGE_LEFT}')`,
            }}
          ></div>
          <div className="buttons">
            <PrimaryButton
              className="full-width"
              buttonLabel="Start Quiz"
              onButtonClick={buttonClickHandler}
            />
            <SecondaryHyperlink linkLabel="View All Personas" />
            <div className="bottom-image">
              <img src={HOME_IMAGE_BOTTOM} alt="bottom" />
            </div>
          </div>
          <div
            className="image-container rotate-right"
            style={{
              backgroundImage: `linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), url('${HOME_IMAGE_RIGHT}')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
