import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   id: 12,
    //   name: "Italian Cheese Pizza",
    //   unitPrice: 12,
    //   quantity: 2,
    //   totalPrice: 24,
    // },
  ],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartReducer.caseReducers.removeItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartReducer.actions;

export default cartReducer.reducer;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
