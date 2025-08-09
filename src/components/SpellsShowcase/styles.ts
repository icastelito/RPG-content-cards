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
`;

export const ShowcaseContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 300px;
	background-color: ${(props) => props.theme.colors.surface};
	border-radius: 1px;
	box-shadow: 0 0 3px ${(props) => props.theme.colors.blackLight};
	margin: 10px;
	padding: 10px;
	color: ${(props) => props.theme.colors.textOnSurface};
	min-width: 25dvw;
`;

export const SpellName = styled.h1`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin: 5px 0px 0px 0px;
	padding: 0 10px 0 10px;
`;

export const SpellDamage = styled.p`
	font-size: 14px;
	text-align: center;
	font-style: italic;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellLevelSchool = styled.h2`
	font-size: 18px;
	font-style: italic;
	font-weight: bold;
	text-align: center;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellDescription = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellCastingTime = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellRange = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellComponents = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const SpellDuration = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const horizontalLine = styled.div`
	background-color: ${(props) => props.theme.getColor("black", 0.25)};
	height: 2px;
	margin: 3px;
	align-self: center;
	width: 100%;
`;

export const SpellConjurer = styled.p`
	font-size: 14px;
	text-align: flex-start;
	margin: 0;
	margin: 5px 5px 0px 5px;
	padding: 0 10px 0 10px;
`;

export const InforHover = styled.a`
	font-size: 12px;
	text-align: flex-start;
	margin: 0;
	color: ${(props) => props.theme.colors.textOnSurface};
	cursor: pointer;
`;
