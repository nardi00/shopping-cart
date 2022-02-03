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