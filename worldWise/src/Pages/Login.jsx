import React from "react";
import Navbar from "../Components/NavBar";
import Style from "./Login.module.css";
import Button from "../Components/Button";
function Login() {
  return (
    <div className="main">
      <Navbar />
      <div className={Style.form}>
        <p>Email Address</p>
        <input type="text" placeholder="JohnDoe@gmail.com" />
        <p>Password</p>
        <input type="text" placeholder="abc@1234" />
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Login;
