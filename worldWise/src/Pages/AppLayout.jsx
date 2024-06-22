import React from "react";
import LeftSide from "../Components/LeftSide";
import RightSideMap from "../Components/RightSideMap";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={`${styles.appLayout} main`}>
      <LeftSide />
      <RightSideMap />
    </div>
  );
}

export default AppLayout;
