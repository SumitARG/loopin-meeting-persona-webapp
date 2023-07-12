import "./LoopinRecommendations.scss";
import LOOPIN_VECTOR from "../../../assets/images/loopin_vector.svg";
import FeatureCard from "../FeatureCard/FeatureCard";
import { LOOPIN_FEATURES, LOOPIN_REDIRCT_URL } from "../../../config/Constants";

const LoopinRecommendations = ({ recommendations }) => {
  return (
    <div className="loopin">
      <div className="loopin-header">
        <div className="loopin-image-div">
          <img src={LOOPIN_VECTOR} alt="Loopin Logo" />
        </div>
        <div className="loopin-recommend-header">
          Personalised Loopin Workflow recommendations
        </div>
        <div className="loopin-hyperlink" onClick={() => window.open(LOOPIN_REDIRCT_URL,"_blank")}>Try Loopin Now &rarr;</div>
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

export default LoopinRecommendations;
