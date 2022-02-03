import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  font-family: "Work Sans";

  & > ul {
    display: flex;
    align-items: center;
    & > li a {
      font-size: 20px;
      color: black;
      transition: 0.5s;
    }
    & > li:not(:first-child) a{
      padding-left: 20px;
    }
  }
  @media (max-width: 630px) {
    justify-content: center;
    h1{
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Syne";
  font-weight: 700;
  font-size: 20px;

  & > a {
    color: black;
    transition: 0.5s;
    text-decoration: none;
    &:hover {
      letter-spacing: 4px;
    }
  }
`;
