import { useSelector } from "react-redux";
import "./App.css";
import Account from "./Features/account/Account";
import CreateCustomer from "./Features/customer/CreateCustomer";

function App() {
  const custumer = useSelector((state) => state.custumer.fullName);
  return (
    <>
      <div>{custumer === "" ? <CreateCustomer /> : <Account />}</div>
    </>
  );
}

export default App;
