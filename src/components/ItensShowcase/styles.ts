import styled from "styled-components";

export const Showcase = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  justify-items: stretch;
  border-radius: 5px;
  align-items: start;
  width: 80%;
  margin: 0 auto;
  top: 0;
`;

export const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 1px;
  box-shadow: 0 0 3px ${(props) => props.theme.colors.blackLight};
  margin: 10px;
  color: ${(props) => props.theme.colors.fontColorStandard};
  top: 0;
  min-width: 25dvw;
`;

export const ItemName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`;

export const ItemType = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
  margin-top: 5px;
`;

export const ItemRarity = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
  margin-top: 5px;
`;

export const ItemPowerIdentity = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
  margin-top: 5px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
  margin-top: 5px;
`;

export const ItemComponents = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
  margin-top: 5px;
`;

export const horizontalLine = styled.div`
  background-color: ${(props) => props.theme.getColor("greyLight", 0.3)};
  height: 3px;
  margin: 0;
  align-self: center;
  width: 100%;
`;
