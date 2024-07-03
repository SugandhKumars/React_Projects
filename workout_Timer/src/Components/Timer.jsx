import React from "react";
import styles from "./Timer.module.css";
function Timer() {
  return (
    <div className={styles.timer}>
      <button>-</button>
      Timer <button>+</button>
    </div>
  );
}

export default Timer;
