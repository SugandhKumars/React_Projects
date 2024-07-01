import React, { createContext, useContext, useEffect, useState } from "react";
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
import "../App.css";

// Create Context
export const CityContext = createContext();

// Create Provider Component
const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getCity() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCities(data);
    }
    getCity();
  }, []);
  console.log(cities);
  return (
    <CityContext.Provider value={{ cities, setCities }}>
      {children}
    </CityContext.Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
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
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;
