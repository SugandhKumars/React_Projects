import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer, index, maxPoints }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p className="question mb">{question.question}</p>

      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        index={index}
      />
    </div>
  );
};

export default Question;
