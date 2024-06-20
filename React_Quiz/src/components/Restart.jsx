import React from "react";

function Restart({ dispatch }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        className="btn-ui"
        onClick={() => {
          dispatch({ type: "Re-Start" });
        }}
      >
        Re-Start
      </button>
    </div>
  );
}

export default Restart;
