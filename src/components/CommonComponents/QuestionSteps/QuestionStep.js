import React from "react";
import "./QuestionStep.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import STEP_RUNNER_LOTTIE from "../../../assets/lotties/step_runner.json";

const QuestionStep = ({ completedStep }) => {
  const steps = [1, 2, 3, 4, 5, 6];
  return (
    <div className="steps">
      {steps.map((item) => (
        <div className={`step ${item <= completedStep ? "active-step" : ""}`}>
          {item === completedStep ? (
            <Player className="step-lottie" src={STEP_RUNNER_LOTTIE} loop autoplay />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionStep;
