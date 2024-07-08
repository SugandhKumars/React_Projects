import React from "react";
import { useSelector } from "react-redux";

function Customer() {
  const custumer = useSelector((state) => state.custumer.fullName);
  return <h1>Welcome , {custumer}</h1>;
}

export default Customer;
