import React from "react";
import { Link } from "react-router-dom";
import { Container, Screen, ProductsContainer, ProductCard, Price } from "./styles";

const Shop = ({ productItems, handleAddProduct }) => {
  return (
    <Screen>
      <Container>
        <h1>Shop</h1>
        <ProductsContainer>
          {productItems.map((item) => (
            <ProductCard>
            <Link to={`shop/${item.id}`} ><img src={item.image} alt={item.name}/></Link>
              <div>
                <h3>{item.name}</h3>
                <p>{item.author}</p>
              </div>
              <Price>
                <div>
                <p>${item.price}</p>
                <button >Add to cart</button>
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
