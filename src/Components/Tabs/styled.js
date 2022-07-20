import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 1em;
  height: 3rem;
  width: 100%;
  margin: 1rem 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 0.7rem;
  padding: 0.4rem;
  width:6rem;
  margin: 3rem 0;
  user-select: none;
  cursor: pointer;
  background-color: rgb(255,80,80);
  position:relative;
  top: -11.4rem;
  left: -5.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: rgb(240,240,250);
  text-align:center;
  
  &:hover {
    background-color: rgb(255,120,120);
    box-shadow: -0.1rem 0 0.5rem rgba(250, 250, 200, 0.5);
  }

  &:focus {
    outline:none;
  }

  &.is-selected {
    box-shadow: 0 0 0.5rem rgba(250, 250, 200, 0.5);
    border-radius: 0;
    cursor: initial;
    border-top-left-radius: 0.7em;
    border-top-right-radius: 0.7em;
    background-color: rgb(50,50,75);
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  height: 20rem;
  width: 25rem;
  padding: 0.5em;
  border-radius: 0.7em;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  background-color: rgb(50,50,75);

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: rgb(255,240,240);
  }

  &.is-selected {
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction:column;
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';
