import { configureStore } from "@reduxjs/toolkit";
import reducer1 from "./Features/account/accountSlice";
import reducer2 from "./Features/customer/customerSlice";

const store = configureStore({
  reducer: {
    account: reducer1,
    custumer: reducer2,
  },
});

export default store;
