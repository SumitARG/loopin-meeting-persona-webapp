import LOOPIN_VECTOR from "../../../assets/images/svg/loopin_vector.svg";
import { LOOPIN_FEATURES } from "../../../config/Constants";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./LoopinInsights.scss";

const LoopinInsights = ({ strengths, recommendations }) => {
  return (
    <div className="insights-container">
      <div className="insights-header">
        <div className="colored-text">Your Superpowers</div>&nbsp;💪
      </div>
      <div className="strengths-container">
        {strengths.map((strength, i) => (
          <div key={i} className="strengths-insight">
            <div className="strengths-content">{strength.content}</div>
            <div className="strengths-icon">{strength.image}</div>
          </div>
        ))}
      </div>
      <div className="loopin-header">
        <div className="loopin-image-div">
          <img src={LOOPIN_VECTOR} alt="Loopin Logo" />
        </div>
        <div className="colored-text">
          Unleash Your Superpowers with these Awesome Loopin Add-ons
        </div>
      </div>
      <div className="loopin-recommendations">
        {recommendations.map((featureId) => {
          let feature = LOOPIN_FEATURES.find((item) => item.id === featureId);
          return <FeatureCard key={featureId} feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default LoopinInsights;
