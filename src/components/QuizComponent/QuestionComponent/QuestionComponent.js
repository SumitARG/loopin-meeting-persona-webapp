import "./QuestionComponent.scss";
import Option from "./Option/Option";
import { useState } from "react";

const QuestionComponent = ({ questionTemplate }) => {
  const [selectedId, setSelectedId] = useState();

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
