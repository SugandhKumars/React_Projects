import React, { useState } from "react";
import Customer from "../customer/Customer";
import { useDispatch, useSelector } from "react-redux";
import { WithrawMoney, addMoney, getLoan, payLoan } from "./accountSlice";

function Account() {
  const [deposit, setDeposit] = useState("");
  const [withraw, setWithraw] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanAmountPurpose, setLoanAmountPurpose] = useState("");
  const [Currency, setCurrency] = useState("INR");
  const { Balance, loan, loanPurpose } = useSelector((state) => state.account);
  // const  = useSelector((state) => state.account.loan);
  const dispatch = useDispatch();
  // console.log(Currency);
  function handleDeposit() {
    if (!deposit) return;
    dispatch(addMoney(deposit, Currency));

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
        <p>₹{Balance}</p>
      </div>
      <div className="container">
        <div>
          <label>Deposit </label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
          />
          <label>Currency </label>
          <select
            value={Currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
          </select>
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
        {loan > 0 && (
          <div>
            <label>
              Pay Back ₹{loan}({loanPurpose})
            </label>
            <button onClick={handlePayLoan}>PAY LOAN</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
