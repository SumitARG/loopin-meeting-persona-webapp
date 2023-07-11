import "./QuizComponent.scss";
import LEFT_IMAGE_1 from "../../assets/images/quiz_image_left_1.png";
import LEFT_IMAGE_2 from "../../assets/images/quiz_image_left_2.png";
import LEFT_IMAGE_3 from "../../assets/images/quiz_image_left_3.png";
import LEFT_IMAGE_4 from "../../assets/images/quiz_image_left_4.png";
import LEFT_IMAGE_5 from "../../assets/images/quiz_image_left_5.png";
import LEFT_IMAGE_6 from "../../assets/images/quiz_image_left_6.png";
import RIGHT_IMAGE_2 from "../../assets/images/quiz_image_right_2.svg";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import PrimaryButton from "../CommonComponents/PrimaryButton/PrimaryButton";
import {
  LOCAL_STORAGE,
  QUIZ_IMAGES,
  ROUTE_NAMES,
} from "../../config/Constants";
// import FooterComponent from "../FooterComponent/FooterComponent";
import { useNavigate } from "react-router";
import { useState } from "react";

const QuizComponent = ({
  questionNumber,
  questionDetails,
  submitClicked,
  onSubmitClicked,
}) => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(questionNumber !== 6 ? true : false);

  window.addEventListener("storage", () => {
    if (
      JSON.parse(localStorage.getItem(LOCAL_STORAGE.ANSWERS_STORAGE))[
        questionNumber
      ] !== ""
    ) {
      setDisabled(false);
    }
  });

  const nextButtonClickHandler = (event) => {
    event.preventDefault();
    if (questionNumber === 6) {
      let answers = localStorage.getItem(LOCAL_STORAGE.ANSWERS_STORAGE);
      answers = JSON.parse(answers);
      let notAnsweredIndex = Object.keys(answers).findIndex(
        (item) => answers[item] === "" || answers[item] === null
      );
      if (notAnsweredIndex > -1) {
        onSubmitClicked(true);
        document
          .getElementsByClassName(
            "quiz-screen  question-" + (notAnsweredIndex + 1)
          )[0]
          ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else {
        navigate(`/${ROUTE_NAMES.SUBMIT_FORM_ROUTE}`);
      }
    } else {
      if (!disabled) {
        document
          .getElementsByClassName(
            "quiz-screen question-" + (questionNumber + 1)
          )[0]
          ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  };

  const getLeftImage = () => {
    switch (questionNumber) {
      case 1:
        return LEFT_IMAGE_1;
      case 2:
        return LEFT_IMAGE_2;
      case 3:
        return LEFT_IMAGE_3;
      case 4:
        return LEFT_IMAGE_4;
      case 5:
        return LEFT_IMAGE_5;
      case 6:
        return LEFT_IMAGE_6;
      default:
        return "";
    }
  };

  const getRightImage = () => {
    switch (questionNumber) {
      case 1:
        return QUIZ_IMAGES.RIGHT_IMAGE_1;
      case 2:
        return RIGHT_IMAGE_2;
      case 3:
        return QUIZ_IMAGES.RIGHT_IMAGE_3;
      case 4:
        return QUIZ_IMAGES.RIGHT_IMAGE_4;
      case 5:
        return QUIZ_IMAGES.RIGHT_IMAGE_5;
      case 6:
        return QUIZ_IMAGES.RIGHT_IMAGE_6;
      default:
        return "";
    }
  };

  return (
    <>
      <div className={`quiz-screen question-${questionNumber}`}>
        <div className="left-image">
          <img src={getLeftImage()} alt="left" />
        </div>
        <div className="question-container">
          <QuestionComponent questionTemplate={questionDetails} />
          {(submitClicked && disabled) && (
            <label className="question-warning">
              *This question is mandatory
            </label>
          )}
          <div
            className="button-section"
            onClick={(event) => nextButtonClickHandler(event)}
          >
            <PrimaryButton
              buttonLabel={questionNumber === 6 ? "Submit" : "Next"}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="right-image">
          <img src={getRightImage()} alt="right" />
        </div>
      </div>
      {/* {questionNumber === 6 && <FooterComponent />} */}
    </>
  );
};

export default QuizComponent;
