import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  padding: 40px 40px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px;
  & > h1 {
    font-family: 'Syne';
    font-size: 30px;
    font-weight: 700;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const ProductCard = styled.div`
  flex: 0 1 350px;
  border: 1px solid black;
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px 10px 20px;
  & > img{
    height: 250px;
    width: 300px;
  }
  & > p {
    margin-top: 10px;
    font-family: "Work Sans";
    font-weight: 400;
  }
`

