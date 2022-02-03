import React from "react";
import {
  Screen,
  Container,
  ProductsContainer,
  ProductCard,
  NoItems,
  Price,
  Checkout,
} from "./styles";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <Screen>
      <Container>
        <h1>Cart</h1>
        {cartItems.length === 0 && (
          <NoItems>
            <h1>No items added</h1>
          </NoItems>
        )}
        <ProductsContainer>
          {cartItems.map((item) => (
            <ProductCard>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <Price>
                <div>
                  <button onClick={() => handleRemoveProduct(item)}>-</button>
                  <div>{item.quantity}</div>
                  <button onClick={() => handleAddProduct(item)}>+</button>
                </div>
              </Price>
            </ProductCard>
          ))}
        </ProductsContainer>
        {cartItems.length !== 0 && (
          <Checkout>
            <h1>Checkout</h1>
            <div>
              <h1>${totalPrice}</h1>
              <button onClick={() => {alert("<3")}} >Pay</button>
            </div>
          </Checkout>
        )}
        
      </Container>
    </Screen>
  );
};

export default Cart;
