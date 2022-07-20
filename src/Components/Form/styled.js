import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-top: 4rem;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 2px solid #eee;
  background:transparent;
  width: 15rem;
  padding: 0.2rem;
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
`;

export const Button = styled.button`
  border-radius: 0.7rem;
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
`;

export const WrapperResult = styled.div`
  width:25rem;
  height:4rem;
  border-radius: 0.7rem;
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
`;