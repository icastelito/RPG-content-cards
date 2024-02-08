import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Navibar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.getColor("primary", 0.6)};
    height: auto;
    width: 100%;
    position: fixed;
    top: 0;
    justify-content: flex-end;
    align-self: flex-start;
    backdrop-filter: blur(10px);
    right: 0;
`;


export const Listed = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 5dvh;
  min-width: 7dvw;
  width: auto;
  padding: 0 20px;
  transition: 0.5s;
  border-bottom: 1px solid ${theme.getColor("grey", 0.0)};
  &:hover {
    background-color: ${theme.getColor("grey", 0.2)};
    border-bottom: 1px solid ${theme.getColor("grey", 0.5)};
    transition: 0.75s;
  }
`;
