import React from "react";

function Options({ question, dispatch, answer, index }) {
  console.log(answer);
  let ans = answer !== null;
  console.log(ans);
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

      {ans && (
        <button
          onClick={() => dispatch({ type: "nextQue", payload: index + 1 })}
          className="nxt-btn"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Options;
