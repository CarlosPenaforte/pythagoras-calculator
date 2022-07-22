import { createGlobalStyle } from "styled-components";

// @keyframes da animação do background definido
export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  body {
    font-family: sans-serif, Verdana;
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
