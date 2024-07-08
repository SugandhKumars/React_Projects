import { createSlice } from "@reduxjs/toolkit";

const initialStateCustumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
const CustomerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustumer,
  reducers: {
    createCustumer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        (state.fullName = action.payload.fullName),
          (state.nationalID = action.payload.nationalID),
          (state.createdAt = action.payload.createdAt);
      },
    },
  },
});
export const { createCustumer } = CustomerSlice.actions;
console.log(CustomerSlice);
export default CustomerSlice.reducer;
// export default function reducer2(state = initialStateCustumer, action) {
//   switch (action.type) {
//     case "createCustumer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     default:
//       return state;
//   }
// }
// export function createCustumer(fullName, nationalID) {
//   return {
//     type: "createCustumer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }
