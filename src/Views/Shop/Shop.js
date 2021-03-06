import React from "react";
import { Container, Screen, ProductsContainer, ProductCard, Price } from "./styles";

const Shop = ({ productItems, handleAddProduct }) => {
  return (
    <Screen>
      <Container>
        <h1>Shop</h1>
        <ProductsContainer>
          {productItems.map((item) => (
            <ProductCard>
            <img src={item.image} alt={item.name}/>
              <div>
                <h3>{item.name}</h3>
                <p>{item.author}</p>
              </div>
              <Price>
                <div>
                <p>${item.price}</p>
                <button onClick={() => handleAddProduct(item)}>Add to cart</button>
                </div>
              </Price>
            </ProductCard>
          ))}
        </ProductsContainer>
      </Container>
    </Screen>
  );
};

export default Shop;
