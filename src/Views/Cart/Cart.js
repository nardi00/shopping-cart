import React from 'react';
import { Screen, Container, ProductsContainer, ProductCard, NoItems } from './styles'

 const Cart = ({cartItems}) => {
  return (
    <Screen>
      <Container>
        <h1>Cart</h1>
        <ProductsContainer>
          {cartItems.length === 0 && (
            <NoItems>
              <h1>No items added</h1>
            </NoItems>
          )}
          {cartItems.map((item) => (
            <ProductCard>
              <img src={item.image} alt={item.name}/>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Container>
    </Screen>
  )
}

export default Cart
