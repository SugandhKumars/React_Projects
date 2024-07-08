import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustumer } from "./customerSlice";

function CreateCustomer() {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleName(e) {
    setFullName(e.target.value);
  }
  function handleNationalId(e) {
    setNationalId(e.target.value);
  }
  function handleCreateCustomer() {
    if (!fullName || !nationalId) return;
    dispatch(createCustumer(fullName, nationalId));
    setFullName("");
    setNationalId("");
  }

  return (
    <>
      <h2>Create Customer</h2>
      <div className="container">
        <div>
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={handleName} />
        </div>
        <div>
          <label> National Id</label>
          <input type="text" value={nationalId} onChange={handleNationalId} />
        </div>
        <button onClick={handleCreateCustomer}>Create Customer</button>
      </div>
    </>
  );
}

export default CreateCustomer;
