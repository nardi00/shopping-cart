import React, { useState } from "react";
import Header from "./Components/Header";
import data from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Views/Cart/Cart";
import Home from "./Views/Home/Home";
import Shop from "./Views/Shop/Shop";
import { Layout, Main } from "./styles";

function App() {
  const { productItems } = data;
  const [cartItems, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists) {
      setCart(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExists = cartItems.find((item) => item.id === product.id);
    if (ProductExists.quantity === 1) {
      setCart(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExists, quantity: ProductExists.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <Router basename="/shopping-cart" >
      <Layout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  productItems={productItems}
                  handleAddProduct={handleAddProduct}
                />
              }
            />
{/*             <Route
              exact
              path="/shop/:id"
              render={(routeProps) => (
                <Product
                  productItems={productItems}
                  itemId={routeProps.match.params.id}
                  handleAddProduct={handleAddProduct}
                />
              )}
            /> */}
          </Routes>
        </Main>
      </Layout>
    </Router>
  );
}

export default App;
