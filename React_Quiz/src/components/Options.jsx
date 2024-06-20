import React from "react";

function Options({ question, dispatch, answer, index, totalQues }) {
  let ans = answer !== null;

  return (
    <div className="option">
      {question.options.map((opt, i) => (
        <button
          className={`ui-Options ${i === answer ? "left" : ""} ${
            ans ? (i === question.correctOptions ? "green" : "red") : ""
          }`}
          key={i}
          onClick={() => dispatch({ type: "answer", payload: i })}
        >
          {opt}
        </button>
      ))}

      {ans && index < totalQues - 1 && (
        <button
          onClick={() => dispatch({ type: "nextQue", payload: index + 1 })}
          className="nxt-btn"
        >
          Next
        </button>
      )}
      {ans && index == totalQues - 1 && (
        <button
          onClick={() => dispatch({ type: "finish", payload: "finished" })}
          className="nxt-btn"
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default Options;
