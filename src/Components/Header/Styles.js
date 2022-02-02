import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 100%;
  padding: 10px 40px;

  
  & > ul {
    display: flex;
    align-items: center;
    & > li a {
      font-size: 20px;
      color: var(--white);
      transition: 0.5s;
    }
    & > li:not(:first-child) a {
      padding-left: 20px;
    }
  }
  @media (max-width: 630px) {
    justify-content: center;
  }
`