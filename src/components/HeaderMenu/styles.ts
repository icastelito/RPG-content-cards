import styled from "styled-components";

export const Navibar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${(props) => props.theme.getColor("primaryForBackdropBlur", 0.50)};
    justify-content: flex-end;
    align-self: flex-start;
    right: 0;
    backdrop-filter: blur(5px);
`;


export const Listed = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 7dvh;
  min-width: 7dvw;
  height: auto;
  width: auto;
  padding: 0 20px;
  transition: 0.5s;
  border-bottom: 1px solid ${(props) => props.theme.getColor("grey", 0)};
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-bottom: 1px solid ${(props) => props.theme.colors.greyDark};
    transition: 0.75s;
  }
`;
