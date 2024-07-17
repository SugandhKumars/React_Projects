import React from "react";
import Header from "./Header";
import Cart from "../Features/Cart/Cart";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  let loading = navigation.state === "loading";

  return (
    <div>
      {loading && <p>Loading ...</p>}
      <Header />
      <Outlet />
      <Cart />
    </div>
  );
}

export default AppLayout;
