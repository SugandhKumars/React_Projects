import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer, index, totalQues }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p className="question mb">{question.question}</p>

      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        index={index}
        totalQues={totalQues}
      />
    </div>
  );
};

export default Question;
