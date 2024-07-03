import React from "react";
import styles from "./Calculator.module.css";
function Calculator() {
  return (
    <>
      <div className={styles.Calculator}>
        <div className={styles.Excercise}>
          <p className={styles.text}>Type of workout</p>
          <select>
            <option value="">Full Body Workout</option>
            <option value="">Full Body Workout</option>
            <option value="">Full Body Workout</option>
          </select>
        </div>
        <div className={styles.Excercise}>
          <p className={styles.text}>How Many Sets?</p>
          <div>
            <input type="range" max={10} value={3} /> <span>3</span>
          </div>
        </div>
        <div className={styles.Excercise}>
          <p className={styles.text}>How fast are you?</p>
          <div>
            <input type="range" max={180} value={90} />
            <span>90 sec/exercise</span>
          </div>
        </div>
        <div className={styles.Excercise}>
          <p className={styles.text}>Break Length</p>
          <div>
            <input type="range" max={20} value={5} />
            <span>5 minutes/break</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
