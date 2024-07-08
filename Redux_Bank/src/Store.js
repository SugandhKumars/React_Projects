import { combineReducers, createStore } from "redux";
import reducer1 from "./Features/account/accountSlice";
import reducer2 from "./Features/customer/customerSlice";

const reducer = combineReducers({
  account: reducer1,
  custumer: reducer2,
});
const store = createStore(reducer);
console.log(store.getState());

export default store;
