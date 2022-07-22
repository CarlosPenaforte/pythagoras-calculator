import styled from "styled-components";

// Wrapper de auxilio na estilização das tabs
export const WrapperApp = styled.div`
  background-color: transparent;
`;

// Estilização do fundo da pagina
// Background animado com @keyframes
export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, rgb(75,70,100), rgb(135,90,130), rgb(195,110,160), rgb(255,130,190));
  background-size: 400% 400%;
  animation: backgroundTransition 8s ease-in-out infinite ;

  @media (max-width: 30rem){
    background: linear-gradient(-60deg, rgb(75,70,100), rgb(135,90,130), rgb(195,110,160), rgb(255,130,190));
    background-size: 400% 400%;
    animation: backgroundTransition 8s ease-in-out infinite ;
  }
`;
