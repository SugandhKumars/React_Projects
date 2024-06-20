import { useReducer } from "react";
import "./App.css";

let initialState = {
  Balance: 0,
  Loan: 0,
  status: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "OpenAcc":
      return { ...state, Balance: 500, status: action.payload };
    case "deposit":
      return { ...state, Balance: state.Balance + 150 };
    case "withraw":
      return { ...state, Balance: state.Balance - 50 };
    case "TakeLoan":
      return { ...state, Loan: 5000 };
    case "PayLoan":
      return { ...state, Loan: 0 };
    case "Close":
      return { Balance: 0, Loan: 0, status: null };
  }
}
function App() {
  const [State, dispatch] = useReducer(reducer, initialState);
  const { Balance, Loan, status } = State;

  let Isopen = status === null;

  return (
    <>
      <div>Balance : {Balance}</div>
      <div>Loan : {Loan}</div>
      <button
        onClick={() => {
          dispatch({ type: "OpenAcc", status: "Open" });
        }}
      >
        Open Account
      </button>
      <button
        disabled={Isopen}
        onClick={() => {
          dispatch({ type: "deposit" });
        }}
      >
        Deposit 150
      </button>
      <button
        disabled={Isopen}
        onClick={() => {
          if (Balance == 0) return;
          dispatch({ type: "withraw" });
        }}
      >
        WIthraw 50
      </button>
      <button
        disabled={Isopen}
        onClick={() => {
          dispatch({ type: "TakeLoan" });
        }}
      >
        Request Loan 5000
      </button>
      <button
        disabled={Isopen}
        onClick={() => {
          dispatch({ type: "PayLoan" });
        }}
      >
        Pay Loan
      </button>
      <button
        disabled={Isopen}
        onClick={() => {
          if (Balance !== 0 || Loan !== 0) return;
          dispatch({ type: "Close" });
        }}
      >
        Close Account
      </button>
    </>
  );
}

export default App;
