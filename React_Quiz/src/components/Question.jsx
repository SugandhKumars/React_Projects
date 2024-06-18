import React from "react";

const Question = ({ question }) => {
  console.log(question);
  return (
    <div style={{ textAlign: "center" }}>
      <p className="question mb">{question.question}</p>

      <div style={{ width: "40%", margin: "10px auto" }}>
        {question.options.map((opt, i) => (
          <button key={i} className="option-ui mb">
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
