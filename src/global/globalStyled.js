import { createGlobalStyle } from "styled-components";

// Utilização de fonte externa
// @keyframes da animação do background definido
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

  body {
    font-family: "Josefin Sans",sans-serif;
    margin: 0;
    padding: 0;
  }

  @keyframes backgroundTransition {
    0%{
        background-position: 0% 80%;
    }
    50%{
        background-position: 80% 100%;
    }
    100%{
        background-position: 0% 80%;
    }
}
`;
