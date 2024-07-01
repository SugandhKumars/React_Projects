import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <>
      <div className={styles.appNav}>
        <ul>
          <NavLink className={styles.link} to="cities">
            <li>Cities</li>
          </NavLink>
          <NavLink to="country" className={styles.link}>
            <li>Countries</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default AppNav;
