import styled from "styled-components";

export const Showcase = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
	justify-items: center;
	align-items: start;
	width: 90%;
	margin: 0 auto;
	padding: 20px;
`;

export const CardPair = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0;
	box-shadow: 0 8px 32px ${(props) => props.theme.getColor("secondary", 0.15)};
	border-radius: 12px;
	overflow: hidden;
	transition: all 0.3s ease;
`;

export const ShowcaseContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 95.25mm;
	height: 132mm;
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.surface} 0%,
		${(props) => props.theme.colors.background} 100%
	);
	border: 2px solid ${(props) => props.theme.colors.secondary};
	border-right: 1px solid ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.textOnSurface};
	overflow: hidden;
	position: relative;
	transition: all 0.3s ease;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(
			90deg,
			${(props) => props.theme.colors.secondary} 0%,
			${(props) => props.theme.colors.secondaryLight} 50%,
			${(props) => props.theme.colors.secondary} 100%
		);
	}
`;

export const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 95.25mm;
	height: 132mm;
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.greyLight} 0%,
		${(props) => props.theme.colors.grey} 100%
	);
	border: 2px solid ${(props) => props.theme.colors.secondary};
	border-left: 1px solid ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.textOnSurface};
	overflow: hidden;
	position: relative;
	align-items: center;
	justify-content: center;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(
			90deg,
			${(props) => props.theme.colors.secondary} 0%,
			${(props) => props.theme.colors.secondaryLight} 50%,
			${(props) => props.theme.colors.secondary} 100%
		);
	}
`;

export const ItemImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

export const ImagePlaceholder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 96px;
	color: ${(props) => props.theme.colors.fontColorLight};
	text-align: center;
	padding: 20px;
`;

export const ItemHeader = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.secondary} 0%,
		${(props) => props.theme.colors.secondaryLight} 100%
	);
	padding: 8px 6px 6px;
	margin: 0;
	border-radius: 0;
	position: relative;
	flex-shrink: 0;

	&::after {
		content: "";
		position: absolute;
		bottom: -5px;
		left: 50%;
		transform: translateX(-50%);
		width: 60%;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			${(props) => props.theme.colors.secondary} 50%,
			transparent 100%
		);
	}
`;

export const ItemNameContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	flex-wrap: wrap;
`;

export const ItemName = styled.h1`
	font-size: 22px;
	font-weight: bold;
	text-align: center;
	margin: 0;
	color: ${(props) => props.theme.colors.textOnSecondary};
	text-shadow: 0 1px 2px ${(props) => props.theme.getColor("black", 0.3)};
	line-height: 1.2;
`;

export const AnimaSymbols = styled.span`
	font-size: 24px;
	color: ${(props) => props.theme.colors.textOnSecondary};
	text-shadow: 0 1px 2px ${(props) => props.theme.getColor("black", 0.3)};
	font-weight: bold;
	opacity: 0.9;
`;

export const ItemTypeRarity = styled.h2`
	font-size: 16px;
	font-style: italic;
	font-weight: 600;
	text-align: center;
	margin: 4px 0 0 0;
	color: ${(props) => props.theme.getColor("textOnSecondary", 0.9)};
	text-shadow: 0 1px 2px ${(props) => props.theme.getColor("black", 0.3)};
	line-height: 1.1;
`;

export const ItemContent = styled.div`
	padding: 6px 4px 4px;
	flex: 1;
	display: flex;
	flex-direction: column;
	font-size: 16px;
	overflow: hidden;
`;

export const ItemMagicIndicator = styled.p`
	font-size: 16px;
	text-align: center;
	font-style: italic;
	font-weight: 600;
	color: ${(props) => props.theme.colors.secondary};
	margin: 2px 2px 0px 2px;
	padding: 3px 6px;
	background: ${(props) => props.theme.getColor("secondary", 0.15)};
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.getColor("secondary", 0.3)};
	line-height: 1;
`;

export const ItemAttunement = styled.p`
	font-size: 16px;
	text-align: center;
	font-style: italic;
	font-weight: 600;
	color: ${(props) => props.theme.colors.blue};
	margin: 2px 2px 0px 2px;
	padding: 3px 6px;
	background: ${(props) => props.theme.getColor("blue", 0.15)};
	border-radius: 8px;
	border: 1px solid ${(props) => props.theme.getColor("blue", 0.3)};
	line-height: 1;
`;

export const ItemPrice = styled.p`
	font-size: 16px;
	text-align: justify;
	margin: 1px 2px 0px 2px;
	padding: 0 3px;
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-weight: 600;
	line-height: 1.2;
`;

export const ItemProperties = styled.p`
	font-size: 16px;
	text-align: justify;
	margin: 1px 2px 0px 2px;
	padding: 0 3px;
	color: ${(props) => props.theme.colors.fontColorStandart};
	line-height: 1.2;
`;

export const ItemMagicalEffects = styled.p`
	font-size: 16px;
	text-align: justify;
	margin: 1px 2px 0px 2px;
	padding: 0 3px;
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-weight: 500;
	line-height: 1.2;
`;

export const ItemDescription = styled.p`
	font-size: 14px;
	text-align: justify;
	margin: 1px 2px 2px 2px;
	padding: 0 3px;
	line-height: 1.1;
	color: ${(props) => props.theme.colors.fontColorStandart};
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const horizontalLine = styled.div`
	background: linear-gradient(
		90deg,
		transparent 0%,
		${(props) => props.theme.getColor("secondary", 0.6)} 20%,
		${(props) => props.theme.colors.secondary} 50%,
		${(props) => props.theme.getColor("secondary", 0.6)} 80%,
		transparent 100%
	);
	height: 1px;
	margin: 4px 6px;
	align-self: center;
	width: calc(100% - 12px);
	border-radius: 1px;
`;
