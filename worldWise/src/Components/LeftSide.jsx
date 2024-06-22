import React from "react";
import styles from "./LeftSide.module.css";
import { NavLink, Outlet } from "react-router-dom";
import AppNav from "./AppNav";
function LeftSide() {
  return (
    <div className={styles.left}>
      <NavLink className={styles.link} to={"/"}>
        <p className={styles.Logo}>WorldWise</p>
      </NavLink>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default LeftSide;
