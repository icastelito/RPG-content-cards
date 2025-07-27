import styled from "styled-components";

export const CreatureList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	max-width: 1200px;
	margin: 0 auto;
`;

export const CreatureItem = styled.div`
	display: flex;
	background: ${(props) => props.theme.colors.cardBackground};
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 8px;
	padding: 1rem;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
		border-color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const CreatureImageContainer = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 8px;
	overflow: hidden;
	margin-right: 1rem;
	flex-shrink: 0;
	background: ${(props) => props.theme.colors.cardBackground};
	border: 1px solid ${(props) => props.theme.colors.border};

	@media (max-width: 768px) {
		margin: 0 auto 1rem;
	}
`;

export const CreatureImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CreatureInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const CreatureName = styled.h3`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	margin: 0;
	font-size: 1.3rem;
	font-weight: bold;
`;

export const CreatureType = styled.p`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	margin: 0;
	font-size: 0.9rem;
	font-style: italic;
`;

export const CreatureClassification = styled.span`
	display: inline-block;
	background: ${(props) => props.theme.colors.primary};
	color: white;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: bold;
	width: fit-content;
`;

export const CreatureResume = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	margin: 0;
	font-size: 0.95rem;
	line-height: 1.4;
`;

export const CreatureStats = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const StatItem = styled.span`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 0.85rem;
	font-weight: bold;
`;
