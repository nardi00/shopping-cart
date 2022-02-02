import React from "react";
import Header from "./Components/Header/Header";
import data from "./Components/data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './Views/Cart/Cart'
import Home from './Views/Home/Home'
import Product from './Views/Product/Product'
import Shop from './Views/Shop/Shop'

function App() {
  const { productItems } = data;

  return (
    <Router>
    <Header /> 
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />}  />
        <Route exact path="/shop/:id" element={<Product />} />
      </Routes>
    </Router>
    )
}

export default App;
