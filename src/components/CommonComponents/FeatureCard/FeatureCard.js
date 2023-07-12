import FEATURE_IMAGE_7 from "../../../assets/images/Ask LoopinAI.svg";
import FEATURE_IMAGE_2 from "../../../assets/images/Customise your meeting summaries.svg";
import FEATURE_IMAGE_6 from "../../../assets/images/Follow up on Slack.svg";
import FEATURE_IMAGE_3 from "../../../assets/images/Real Time Collaboration.svg";
import FEATURE_IMAGE_4 from "../../../assets/images/Recap Previous notes.svg";
import FEATURE_IMAGE_8 from "../../../assets/images/Record and Summarise Meetings.svg";
import FEATURE_IMAGE_5 from "../../../assets/images/Send Summaries over Email, Slack, Notion.svg";
import FEATURE_IMAGE_1 from "../../../assets/images/Share Meeting Summaries with team.svg";
import { LOOPIN_REDIRCT_URL } from "../../../config/Constants";
import "./FeatureCard.scss";

const FeatureCard = ({ feature }) => {


  const getImage = () => {
    switch (feature?.id) {
      case 1:
        return FEATURE_IMAGE_1;
      case 2:
        return FEATURE_IMAGE_2;
      case 3:
        return FEATURE_IMAGE_3;
      case 4:
        return FEATURE_IMAGE_4;
      case 5:
        return FEATURE_IMAGE_5;
      case 6:
        return FEATURE_IMAGE_6;
      case 7:
        return FEATURE_IMAGE_7;
      case 8:
        return FEATURE_IMAGE_8;
      default:
        return "";
    }
  };

  return (
    <div className="feature-card">
      <div className="feature-header">
        {feature?.name}
      </div>
      <div className="feature-content">
        <img src={getImage()} alt="background" />
      </div>
      <div className="feature-summary" onClick={() => window.open(LOOPIN_REDIRCT_URL,"_blank")}>
        <div className="summary-text">{feature?.summary}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
