import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  Balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: initailState,
  reducers: {
    addMoney(state, action) {
      state.Balance += action.payload;
    },
    WithrawMoney(state, action) {
      if (state.Balance < action.payload) return;
      state.Balance -= action.payload;
    },
    getLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.Balance += action.payload.amount;
      },
    },
    payLoan(state, action) {
      if (state.Balance < state.loan) return;
      state.Balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { WithrawMoney, getLoan, payLoan } = accountSlice.actions;

export function addMoney(amount, currency) {
  if (currency === "INR") return { type: "account/addMoney", payload: amount };

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();

    let converted = data.rates.INR;
    dispatch({ type: "account/addMoney", payload: converted });
  };
}
export default accountSlice.reducer;
// export const { addMoney, WithrawMoney, getLoan, payLoan } =
//   accountSlice.actions;
// export default accountSlice.reducer;
// export default function reducer1(state = initailStateAcc, action) {
//   switch (action.type) {
//     case "OpenAcc":
//       return { ...state, Balance: 500 };
//     case "addAmount":
//       return { ...state, Balance: state.Balance + action.payload };
//     case "Withraw":
//       return { ...state, Balance: state.Balance - action.payload };
//     case "loan":
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         Balance: state.Balance + action.payload.amount,
//       };
//     case "payLoan":
//       return {
//         ...state,
//         Balance: state.Balance - state.loan,
//         loan: "",
//         loanPurpose: "",
//       };
//     default:
//       return state;
//   }
// }

// export function WithrawMoney(amount) {
//   return { type: "Withraw", payload: amount };
// }
// export function getLoan(amount, purpose) {
//   return {
//     type: "loan",
//     payload: { amount: amount, purpose },
//   };
// }
// export function payLoan() {
//   return { type: "payLoan" };
// }
