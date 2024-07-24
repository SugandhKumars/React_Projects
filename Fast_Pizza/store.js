import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/CartSlice";
import userReducer from "./Features/User/userSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
