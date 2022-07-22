import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { GlobalStyle } from './global/globalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //O estilo global é posto no arquivo raíz
  <>
    <GlobalStyle />
    <App />
  </>
);
