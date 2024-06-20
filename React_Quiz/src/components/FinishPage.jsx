import React from "react";

function FinishPage({ points, maxPoints, highScore }) {
  return (
    <div className="poppins-medium  finished">
      You Scored {points} out of {maxPoints}
      <p>HighScore:{highScore}</p>
    </div>
  );
}

export default FinishPage;
