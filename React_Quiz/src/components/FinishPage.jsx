import React from "react";

function FinishPage({ points, maxPoints }) {
  return (
    <div className="poppins-medium  finished">
      You Scored {points} out of {maxPoints}
    </div>
  );
}

export default FinishPage;
