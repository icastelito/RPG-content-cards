import styled from "styled-components";

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
  background-color: ${(props) => props.theme.colors.primaryDark};
  height: auto;
  padding: 0 20px;
  margin: 10px;
  border: 3px solid ${(props) => props.theme.colors.greyLight};
  border-radius: 10px;
  transition: 0.4s;
  svg {
    color: ${(props) => props.theme.colors.fontColorDark};
    transition: 0.4s;
  }
  a {
    color: ${(props) => props.theme.colors.fontColorDark};
    transition: 0.4s;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    transition: 0.85s;
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.greyLight};
    svg {
      color: ${(props) => props.theme.colors.fontColorLight};
      transition: 0.85s;
    transform: scale(1.05);
    }
    a {
      color: ${(props) => props.theme.colors.fontColorLight};
      transition: 0.85s;
    transform: scale(1.05);
    }
  }
`;
