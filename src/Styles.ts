import styled from "styled-components";

export const Container = styled.section`
  
`;

export const Button = styled.button<{toggled: boolean}>`
  position: fixed;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${props => props.theme.getColor("secondary", 0.1)};
  border: none;
  border-radius: 34px;
  cursor: pointer;
  top: 5px;
  left: 5px;
  z-index: 01;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${props => props.theme.getColor("secondary", 0.3)};
  }
`;
