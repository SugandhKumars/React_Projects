import React from "react";

function Progress({ totalQues, index, maxPoints, points, answer }) {
  return (
    <>
      <div className="progress-bar">
        <div>
          <progress value={index + Number(answer !== null)} max={totalQues} />
        </div>
        <div className="progess">
          <p>
            Question <strong> {index + 1 + " / " + totalQues}</strong>
          </p>
          <p>
            <strong>{points + "/" + maxPoints}</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Progress;
