import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Home from "../Pages/Home";
import Pricing from "../Pages/Pricing";
import Login from "../Pages/Login";
import AppLayout from "../Pages/AppLayout";
import CityList from "./CityList";
import CountryList from "./CountryList";
import CityDetails from "./CityDetails";
import Form from "./Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<CityDetails />} />

            <Route path="country" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
