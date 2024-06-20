import React, { useEffect } from "react";

function Timer({ RemainingTime, dispatch }) {
  let min = Math.floor(RemainingTime / 60);
  let sec = RemainingTime % 60;

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch({ type: "Timer" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <button className="time-btn">
        {min < 10 && "0"}
        {min}: {sec < 10 && "0"}
        {sec}
      </button>
    </div>
  );
}

export default Timer;
