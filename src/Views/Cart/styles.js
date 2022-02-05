import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  padding: 40px 40px;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px 40px;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-family: "Syne";
    font-size: 30px;
    font-weight: 700;
  }
`;

export const ProductsContainer = styled.div`
  justify-content: center;
  margin-top: 20px;
`;

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-family: "Syne";
    font-weight: 400;
    color: #C0C0C0;
    font-size: 30px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 10px 20px;
  border: 1px solid #ede7e6;
  h3 {
    font-family: "Work Sans";
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px
  }
  & > img {
    height: 150px;
    width: 150px;
  }
  & > p {
    font-family: "Work Sans";
    font-weight: 400;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    font-family: "Work Sans";
    button {
      cursor: pointer;
    }

    h3 {
      font-weight: 700;
      font-size: 16px;
    }

    p {
      margin-top: 5px;
      color: #ede7e6;
    }
  }
  @media(max-width: 650px) {
    width: 300px;
    flex-direction: column;
  }
`;

export const Price = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    font-family: "Work Sans";

    & > button {
      background-color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  height: 200px;
  font-family: "Work Sans";
  font-weight: 600;
  padding: 20px;
  border-top: 2px solid #C0C0C0;
  & > h1 {
    font-size: 30px;
    color: #C0C0C0;
  }
  & > div {
    display: flex; 
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 30px;
    }
    & > button {
      background-color: black;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`