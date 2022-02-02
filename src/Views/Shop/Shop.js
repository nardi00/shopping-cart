import React from "react";
import { Container, Screen, ProductsContainer, ProductCard } from "./styles";

const Shop = ({ productItems }) => {
  return (
    <Screen>
      <Container>
        <h1>Shop</h1>
        <ProductsContainer>
          {productItems.map((item) => (
            <ProductCard>
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
              <p>{item.author}</p>
              <p>$ {item.price}</p>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Container>
    </Screen>
  );
};

export default Shop;
