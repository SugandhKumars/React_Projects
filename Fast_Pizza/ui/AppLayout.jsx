import React from "react";
import Header from "./Header";
import Cart from "../Features/Cart/Cart";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <h1>Content</h1>
      <Outlet />
      <Cart />
    </div>
  );
}

export default AppLayout;
