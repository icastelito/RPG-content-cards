import styled from "styled-components";

export const Navibar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(86, 58, 87, 0.4);
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
  color: #ffffff;
  transition: 0.5s;
  border-bottom: 1px solid #988abd;
  &:hover {
    background-color: rgba(200, 200, 200, 0.4);
    border-bottom: 1px solid #cccccc;
    color: #988abd;
    transition: 0.75s;
  }
`;
