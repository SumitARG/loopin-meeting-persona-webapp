import "./QuestionComponent.scss";
import Option from "./Option/Option";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../../../config/Constants";

const QuestionComponent = ({ questionTemplate }) => {
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    let answerSet = localStorage.getItem(LOCAL_STORAGE.ANSWERS_STORAGE);
    if (answerSet) {
      answerSet = JSON.parse(answerSet);
      answerSet[questionTemplate.questionId] = questionTemplate.options.find(
        (item) => item.optionId === selectedId
      )?.optionContent || "";
      localStorage.setItem(
        LOCAL_STORAGE.ANSWERS_STORAGE,
        JSON.stringify(answerSet)
      );
      window.dispatchEvent(new Event("storage"));
    }
  }, [selectedId, questionTemplate]);

  return (
    <div className="question-section">
      <div className="question-header">{questionTemplate.question}</div>
      {questionTemplate.options.map((item) => (
        <Option
          content={item.optionContent}
          id={item.optionId}
          isSelected={item.optionId === selectedId}
          setSelected={setSelectedId}
          key={item.optionId}
        />
      ))}
    </div>
  );
};

export default QuestionComponent;
