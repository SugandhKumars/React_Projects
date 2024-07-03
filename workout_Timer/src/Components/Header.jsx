import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
function Header() {
  const [time, setTime] = useState("");
  const dates = new Date();
  let date = dates.toLocaleDateString("hi-IN");

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      hour = hour % 12;
      hour = hour ? hour : 12;
      let time = `${hour}:${min}:${sec} ${hour > 12 ? "PM" : "AM"}`;
      setTime(time);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.header}>
      <p className={styles.heading}>WORKOUT TIMER</p>
      <div className={styles.miniHeadingContainer}>
        <p className={styles.miniHeading}>
          For your workout on {date}, {time}
        </p>
      </div>
    </div>
  );
}

export default Header;
