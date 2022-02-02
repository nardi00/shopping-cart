import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > h1 {
    font-family: 'Syne';
    font-weight: 800;
    font-size: 2.5rem;
  }
  a {
    font-family: "Work Sans";
    margin-top: 40px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.5s;
    text-decoration: none;
    color: white;
    &:hover {
      letter-spacing: 4px;
    }
  }

`