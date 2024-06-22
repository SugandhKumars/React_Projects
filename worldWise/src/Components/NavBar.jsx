import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./NavBar.module.css";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav className={Style.nav}>
        <div className="logo">
          <NavLink className={`${Style.text} ${Style.large}`} to="/">
            WorldWise
          </NavLink>
        </div>

        <ul className={Style.right}>
          <li>
            <NavLink className={Style.text} to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className={Style.text} to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className={Style.text} to="/login">
              <Button>Login</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
