import "./Insights.scss";
import LEFT_IMAGE_WEAKNESS from '../../../assets/images/WEAKNESS_INSIGHT_IMAGE_LEFT.png';

const Insights = ({insightType, content}) => {

// content = ["AAAAA", "dffaf", "fsfsfs"]

  return (
    <div className={`insights alignment-direction-${insightType}`}>
        <div className="insights-content">
            <div className="insights-content-head">
            {insightType === "strengths" ? 'Key Strengths' : 'Weaknesses to conquer'}
            </div>
            <div className="insights-content-body">
                {content.map((item,i) => <li key={i}>{item}</li>)}
            </div>
        </div>
        <div className="insights-image">
        {insightType === "strengths" ? '💪' : <img src={LEFT_IMAGE_WEAKNESS} alt="weaknesses"/>}
        </div>
    </div>
  )
}

export default Insights