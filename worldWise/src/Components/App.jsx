import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Home from "../Pages/Home";
import Pricing from "../Pages/Pricing";
import Login from "../Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
