import styled from "styled-components";

// Formulário ocupando todo o painel
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

// Centralização de cada input
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Input estilizado com borda inferior apenas e retirada de linha externa ao selecionar
export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid #eee;
  background:transparent;
  width: 15rem;
  padding-bottom: 0.2rem;
  box-sizing:border-box;
  text-align: center;
  color: rgb(240,240,250);
  font-size: 1rem;

  &::-webkit-input-placeholder{
    color: rgba(240,240,250,0.7);
  }

  &:focus{
    outline: none;
  }

  @media (max-width: 30rem) {
    border-bottom: 1px solid #eee;
    width: 54vw;
    font-size: 16px;
    padding-bottom: 4px;

  }
`;

// Botão reativo ao hover do mouse 
export const Button = styled.button`
  border-radius: 0.8rem;
  border: 0;
  width: 15rem;
  padding: 0.4rem;
  color: rgb(75,50,50);
  cursor: pointer;
  background-color: rgb(255,80,80);

  h3{
    text-transform: uppercase;
    font-weight: 600;
    color: rgb(240,240,250);
    margin:0;
    padding:0;
    font-size:1rem;
  }

  &:hover{
    background-color: rgb(255,120,120);
    box-shadow: -0.1rem 0 0.5rem rgba(250, 250, 200, 0.5);
  }

  @media (max-width: 30rem) {
    border-radius: 11px;
    width: 54vw;

    h3{
      font-size:16px;
      font-weight: 700;
    }

    &:hover{
      box-shadow: -2px 0 6px rgba(250, 250, 200, 0.5);
    }
  }
`;

// Container estilizado para foco no resultado expresso
export const WrapperResult = styled.div`
  width:25rem;
  height:4rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:rgb(255,245,245);
  box-shadow: inset 0 0 0.3rem rgba(30, 30, 30, 0.5);

  h2 {
    margin:0;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: rgb(255,80,80);
  }

  p {
    margin:0;
    font-size: 1.1rem;
    color: rgb(30,30,50);
  }

  @media (max-width: 30rem) {
    width: 90vw;
    height: 14.4vw;

    h2{
      font-size:22px;
      margin-left: 5px;

    }

    p{
      font-size:16px;
    }
  }
`;