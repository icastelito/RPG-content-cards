import styled from "styled-components";

export const Navibar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.getColor("primary", 0.8)};
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
  font-family: ${(props) => props.theme.fonts.a};
  border-bottom: 1px solid ${(props) => props.theme.getColor("greySet2", 0)};
  &:hover {
    background-color: ${(props) => props.theme.getColor("primary", 0.8)};
    border-bottom: 1px solid ${(props) => props.theme.getColor("greySet2", 0.4)};
    transition: 0.75s;
  }
`;
