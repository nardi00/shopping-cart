import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  padding: 40px 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px;
  & > h1 {
    font-family: "Syne";
    font-size: 30px;
    font-weight: 700;
  }
`;

export const ProductsContainer = styled.div`
  justify-content: center;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  flex: 0 1 300px;
  border: 1px solid #ede7e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 10px 20px;

  & > img {
    height: 300px;
    width: 300px;
  }
  & > p {
    margin-top: 10px;
    font-family: "Work Sans";
    font-weight: 400;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    font-family: "Work Sans";

    h3 {
      font-weight: 700;
      font-size: 16px;
    }

    p {
      margin-top: 5px;
      color: #ede7e6;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  width: 100%;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: "Work Sans";
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    p {
      font-size: 18px;
    }

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
