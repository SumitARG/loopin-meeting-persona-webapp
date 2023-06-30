import "./QuizComponent.scss";
import LEFT_IMAGE from "../../assets/images/quiz_image_left_1.png";
import RIGHT_IMAGE from "../../assets/images/quiz_image_right_1.png";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";

const QuizComponent = ({ questionNumber, questionDetails }) => {
  const nextButtonClickHandler = (event) => {
    event.preventDefault();
    document
      .getElementsByClassName("quiz-screen question-" + (questionNumber + 1))[0]
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  return (
    <>
      <div className={`quiz-screen question-${questionNumber}`}>
        <div className="left-image">
          <img src={LEFT_IMAGE} alt="left" />
        </div>
        <div className="question-container">
          <QuestionComponent questionTemplate={questionDetails} />
        </div>
        <div className="right-image">
          <img src={RIGHT_IMAGE} alt="right" />
        </div>
      </div>
      <div
        className="button-section"
        onClick={(event) => nextButtonClickHandler(event)}
      >
        <PrimaryButton buttonWidth="100" buttonLabel="Next" />
      </div>
    </>
  );
};

export default QuizComponent;
