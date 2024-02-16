import styled from "styled-components";

export const Showcase = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  justify-items: stretch;
  border-radius: 5px;
  align-items: start;
  width: 80%;
  margin-top: 50px;
`;

export const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 1px;
  box-shadow: 0 0 3px ${(props) => props.theme.colors.blackLight};
  margin: 10px;
  padding: 10px;
  color: ${(props) => props.theme.colors.fontColorStandard};
`;

export const SpellName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const SpellLevelSchool = styled.h2`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const SpellDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
`;

export const SpellCastingTime = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
`;

export const SpellRange = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
`;

export const SpellComponents = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
`;

export const SpellDuration = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0;
`;

export const horizontalLine = styled.div`
  background-color: ${(props) => props.theme.getColor("greyLight",0.3)};
  height: 3px;
  margin: 0;
  align-self: center;
  width: 100%;
`;



