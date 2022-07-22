import styled from "styled-components";

//Título fixado na parte superior
export const WrapperHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: rgb(250, 240, 240);
  }

  @media (max-width: 40rem) {
    margin-top: 20px;
    text-align: center;
    
    h1{
      font-size:25px;
      letter-spacing: 2px;
      font-weight: 700;
    }
  }
`;
