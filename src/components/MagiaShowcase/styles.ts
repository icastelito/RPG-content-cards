import styled from "styled-components";

export const Showcase = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5em;
	padding: 20px;
	max-width: 1200px;
	margin: 0 auto;

	border-radius: ${(props) => props.theme.borderRadius.lg};
	min-height: 100vh;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1em;
	}
`;

export const ShowcaseContent = styled.div`
	border: 1px solid ${(props) => props.theme.colors.secondary};
	border-radius: ${(props) => props.theme.borderRadius.xl};
	background: ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.xl};
	margin: 0 0 ${(props) => props.theme.spacing.xl} 0;
	box-shadow: ${(props) => props.theme.shadows.lg};
	font-family: ${(props) => props.theme.fonts.body};
	position: relative;
	width: 90%;
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.primary} 00%,
		${(props) => props.theme.colors.primaryLight} 100%
	);
	transition: all 0.3s ease;
`;

export const SpellName = styled.h3`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.secondary} 0%,
		${(props) => props.theme.colors.secondaryDark} 100%
	);
	color: ${(props) => props.theme.colors.white};
	margin: -${(props) => props.theme.spacing.lg} -${(props) => props.theme.spacing.xl} 0 -${(props) => props.theme.spacing.xl};
	padding: ${(props) => props.theme.spacing.lg};
	font-family: ${(props) => props.theme.fonts.animation};
	border-radius: ${(props) => props.theme.borderRadius.xl} ${(props) => props.theme.borderRadius.xl} 0 0;
	font-size: ${(props) => props.theme.fontSizes.xl};
	font-weight: 700;
	text-align: center;
	letter-spacing: 0.5px;
	margin-bottom: ${(props) => props.theme.spacing.lg};
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const SpellLevelSchool = styled.p`
	color: ${(props) => props.theme.colors.fontColorDark};
	font-size: ${(props) => props.theme.fontSizes.lg};
	font-weight: 600;
	text-align: center;
	margin: ${(props) => props.theme.spacing.md} 0;
	line-height: 1.4;
	font-family: ${(props) => props.theme.fonts.body};
`;

export const horizontalLine = styled.hr`
	border: none;
	border-top: 1px solid ${(props) => props.theme.colors.greyLight};
	margin: ${(props) => props.theme.spacing.lg} 0;
	opacity: 0.6;
`;

export const SpellCost = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.sm};
	margin: ${(props) => props.theme.spacing.xs} 0;
	line-height: 1.5;
	font-family: ${(props) => props.theme.fonts.body};

	strong {
		color: ${(props) => props.theme.colors.fontColorDark};
		font-weight: 600;
	}
`;

export const SpellComponents = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.sm};
	margin: ${(props) => props.theme.spacing.xs} 0;
	line-height: 1.5;
	font-family: ${(props) => props.theme.fonts.body};

	strong {
		color: ${(props) => props.theme.colors.fontColorDark};
		font-weight: 600;
	}
`;

export const SpellCastingTime = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.sm};
	margin: ${(props) => props.theme.spacing.xs} 0;
	line-height: 1.5;
	font-family: ${(props) => props.theme.fonts.body};

	strong {
		color: ${(props) => props.theme.colors.fontColorDark};
		font-weight: 600;
	}
`;

export const SpellRange = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.sm};
	margin: ${(props) => props.theme.spacing.xs} 0;
	line-height: 1.5;
	font-family: ${(props) => props.theme.fonts.body};

	strong {
		color: ${(props) => props.theme.colors.fontColorDark};
		font-weight: 600;
	}
`;

export const SpellDuration = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.sm};
	margin: ${(props) => props.theme.spacing.xs} 0 ${(props) => props.theme.spacing.md} 0;
	line-height: 1.5;
	font-family: ${(props) => props.theme.fonts.body};

	strong {
		color: ${(props) => props.theme.colors.fontColorDark};
		font-weight: 600;
	}
`;

export const SpellDescription = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: ${(props) => props.theme.fontSizes.base};
	line-height: 1.6;
	text-align: left;
	margin-top: ${(props) => props.theme.spacing.lg};
	padding-top: ${(props) => props.theme.spacing.lg};
	border-top: 1px solid ${(props) => props.theme.colors.greyLight};
	font-family: ${(props) => props.theme.fonts.body};
`;

// Tags para natureza e conspectos
export const Tag = styled.span`
	display: inline-block;
	padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
	margin: ${(props) => props.theme.spacing.xs};
	font-size: ${(props) => props.theme.fontSizes.xs};
	font-weight: 600;
	border-radius: ${(props) => props.theme.borderRadius.full};
	color: ${(props) => props.theme.colors.white};
	text-align: center;
	transition: all 0.2s ease;
	cursor: default;
	font-family: ${(props) => props.theme.fonts.body};
	text-transform: uppercase;
	letter-spacing: 0.5px;

	&:hover {
		transform: scale(1.05);
		box-shadow: ${(props) => props.theme.shadows.md};
	}
`;

export const TagNatureza = styled(Tag)<{ natureza: string }>`
	padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.md};
	background: ${({ natureza, theme }) => {
		switch (natureza.toLowerCase()) {
			case "prístina":
			case "pristina":
				return "#1f564C";
			case "bruta":
				return "#bd0003";
			case "oculta":
				return " #800080";
			case "arcana":
				return "#30D5C8";
			case "divina":
				return "#f59e0b";
			default:
				return theme.colors.grey;
		}
	}};
	color: ${({ natureza }) =>
		natureza.toLowerCase() === "divina" || natureza.toLowerCase() === "arcana" ? "#000" : "#fff"};
`;

export const TagConspecto = styled(Tag)`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.secondary} 0%,
		${(props) => props.theme.colors.secondaryDark} 100%
	);
	border: 1px solid ${(props) => props.theme.colors.secondaryLight};
	padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.md};
`;

export const InforHover = styled.span`
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.white};
	text-align: center;
	font-size: ${(props) => props.theme.fontSizes.xs};
	line-height: 16px;
	cursor: help;
	margin-right: ${(props) => props.theme.spacing.xs};
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) => props.theme.colors.secondaryLight};
		transform: scale(1.1);
	}
`;
