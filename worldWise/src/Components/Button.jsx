import React from "react";
import Style from "./Button.module.css";
function Button({ children }) {
  return <button className={Style.btn}>{children}</button>;
}

export default Button;
