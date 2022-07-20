import styled from "styled-components";

export const WrapperApp = styled.div`
  display: flex;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, rgb(50,50,75), rgb(125,75,100), rgb(200,100,125), rgb(255,125,150));
  background-size: 400% 400%;
  animation: backgroundTransition 8s ease-in-out infinite ;
`;
