const initailStateAcc = {
  Balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function reducer1(state = initailStateAcc, action) {
  switch (action.type) {
    case "OpenAcc":
      return { ...state, Balance: 500 };
    case "addAmount":
      return { ...state, Balance: state.Balance + action.payload };
    case "Withraw":
      return { ...state, Balance: state.Balance - action.payload };
    case "loan":
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        Balance: state.Balance + action.payload.amount,
      };
    case "payLoan":
      return {
        ...state,
        Balance: state.Balance - state.loan,
        loan: "",
        loanPurpose: "",
      };
    default:
      return state;
  }
}

export function addMoney(amount) {
  return { type: "addAmount", payload: amount };
}
export function WithrawMoney(amount) {
  return { type: "Withraw", payload: amount };
}
export function getLoan(amount, purpose) {
  return {
    type: "loan",
    payload: { amount: amount, purpose },
  };
}
export function payLoan() {
  return { type: "payLoan" };
}
