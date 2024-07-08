import React, { useState } from "react";
import Customer from "../customer/Customer";
import { useDispatch, useSelector } from "react-redux";
import { WithrawMoney, addMoney, getLoan, payLoan } from "./accountSlice";

function Account() {
  const [deposit, setDeposit] = useState("");
  const [withraw, setWithraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanAmountPurpose, setLoanAmountPurpose] = useState("");
  const balance = useSelector((state) => state.account.Balance);
  const loan = useSelector((state) => state.account.loan);
  const dispatch = useDispatch();

  function handleDeposit() {
    if (!deposit) return;
    dispatch(addMoney(deposit));
    setDeposit("");
  }
  function handleWithraw() {
    if (!withraw) return;
    dispatch(WithrawMoney(withraw));
    setWithraw("");
  }
  function handleLoan() {
    if (!loanAmount || !loanAmountPurpose) return;
    dispatch(getLoan(loanAmount, loanAmountPurpose));
    setLoanAmount("");
    setLoanAmountPurpose("");
  }
  function handlePayLoan() {
    dispatch(payLoan());
  }
  return (
    <div className="main">
      <Customer />
      <h2>Your Account Operation</h2>
      <div className="balance">
        <p>₹{balance}.00</p>
      </div>
      <div className="container">
        <div>
          <label>Deposit </label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
        <div>
          <label>Withraw </label>
          <input
            type="number"
            value={withraw}
            onChange={(e) => setWithraw(Number(e.target.value))}
          />
          <button onClick={handleWithraw}>Withraw</button>
        </div>
        <div>
          <label>Request Loan </label>
          <input
            type="number"
            placeholder="Loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Loan Purpose"
            value={loanAmountPurpose}
            onChange={(e) => setLoanAmountPurpose(e.target.value)}
          />

          <button onClick={handleLoan}>Request Loan</button>
        </div>
        <div>
          <label>Pay Back ₹{!loan ? 0 : loan}</label>
          <button onClick={handlePayLoan}>PAY LOAN</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
