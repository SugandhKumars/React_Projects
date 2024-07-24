import React from "react";
import Header from "./Header";

import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  let loading = navigation.state === "loading";

  return (
    <div className="pt-[0.1px] relative">
      {loading && <p>Loading ...</p>}
      <Header />
      <Outlet />
      <CartOverview className="absolute bottom-0" />
    </div>
  );
}

export default AppLayout;
