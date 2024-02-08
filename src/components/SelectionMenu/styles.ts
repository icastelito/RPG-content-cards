import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Rowler = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;

export const RouteButton = styled.button`
  width: auto;
  height: auto;
`;
export const ContentButtom = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20dvh;
  width: 15dvh;
  background-color: ${theme.getColor("primary", 0.8)};
  height: auto;
  padding: 0 20px;
  margin: 10px;
  border: 3px solid ${theme.getColor("darkGrey", 0.5)};
  border-radius: 10px;
  transition: 0.4s;

  &:hover {
    background-color: ${theme.getColor("primary", 0.4)};
    transition: 0.85s;
    transform: scale(1.03);
    box-shadow: 0 0 10px ${theme.getColor("grey", 0.9)};
  }
`;
