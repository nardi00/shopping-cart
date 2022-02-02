import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(
    360deg,
    #50c9c3 10%,
    #96deda 360%
  ); /* Chrome 10+, Saf5.1+ */
  background: -o-linear-gradient(
    360deg,
    #50c9c3 10%,
    #96deda 360%
  ); /* Opera 11.10+ */
  background: linear-gradient(360deg, #50c9c3 10%, #96deda 360%); /* W3C */
`;
