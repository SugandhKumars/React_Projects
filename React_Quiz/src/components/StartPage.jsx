import React from "react";

function StartPage({ dispatch, question }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 className="mb">Welcome to React Quiz</h3>
      <p className="mb">
        {question.length} Question be asked in the quiz to test your React
        Knowledge
      </p>
      <button
        className="btn-ui"
        onClick={() => dispatch({ type: "getQuestions", payload: "active" })}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartPage;
