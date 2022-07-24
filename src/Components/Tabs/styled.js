import styled from "styled-components";
// Utilização da biblioteca react-tabs para utilizar paineis reativos com abas
// Cada painel pode ser selecionado pelo click na aba respectiva
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

// Centralização do container funcional
export const WrapperTabs = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

// Retirada de predefinições da lista de tabs
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 0;
  position: relative;
  bottom: -0.2rem;
  left: 1rem;

  @media (max-width: 30rem) {
    position: relative;
    bottom: -3px;
    left: 14px;
  }
`;

WrapperTabList.tabsRole = "TabList";

// Tab reativo ao click e ao hover do mouse, para que a tab atual fique evidente
export const WrapperTab = styled(Tab)`
  border-radius: 0.8rem;
  padding: 0.4rem;
  width: 6rem;
  height: 1.2rem;
  user-select: none;
  cursor: pointer;
  background-color: rgb(255, 80, 80);
  font-weight: 600;
  font-size: 1rem;
  color: rgb(240, 240, 250);
  text-align: center;

  &:hover {
    background-color: rgb(255, 120, 120);
    box-shadow: -0.1rem 0 0.5rem rgba(250, 250, 200, 0.5);
  }

  &:focus {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  &.is-selected {
    box-shadow: 0 0 0.5rem rgba(250, 250, 200, 0.5);
    border-radius: 0;
    cursor: initial;
    border-top-left-radius: 0.8em;
    border-top-right-radius: 0.8em;
    background-color: rgb(50, 50, 75);
  }

  @media (max-width: 30rem) {
    border-radius: 11px;
    width: 21.6vw;
    height: 5vw;
    padding: 1.44vw;
    font-size: 13px;

    &.is-selected {
      box-shadow: 0 0 8px rgba(250, 250, 200, 0.5);
      border-radius: 0;
      cursor: initial;
      border-top-left-radius: 11px;
      border-top-right-radius: 11px;
      background-color: rgb(50, 50, 75);
    }

    &:hover {
      box-shadow: -2px 0 8px rgba(250, 250, 200, 0.5);
    }
  }
`;

WrapperTab.tabsRole = "Tab";

// Painel reativo à tab selecionada e centralizado na tela
export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  margin: 0;
  z-index: 2;
  height: 20rem;
  width: 25rem;
  padding: 0.5em;
  border-radius: 0.8em;
  background-color: rgb(50, 50, 75);

  h1 {
    margin: 8% 0 4% 0;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
    color: rgb(255, 240, 240);
  }

  &.is-selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 30rem) {
    width: 90vw;
    height: 72vw;
    border-radius: 11px;
    padding: 8px;

    h1 {
      font-size: 18px;
      letter-spacing: 1px;
    }
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";
