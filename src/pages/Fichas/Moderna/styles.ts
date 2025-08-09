import styled from "styled-components";

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 2rem;
	min-height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Header = styled.header`
	text-align: center;
	margin-bottom: 3rem;
`;

export const Title = styled.h1`
	font-family: "Philosopher", serif;
	font-weight: 700;
	font-size: 2.5rem;
	color: ${(props) => props.theme?.colors?.fontColorDark || "#2c2c2c"};
	margin-bottom: 0.5rem;
	text-transform: uppercase;
	letter-spacing: 2px;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const Subtitle = styled.h2`
	font-family: "Trajan Pro", serif;
	font-size: 1.2rem;
	color: ${(props) => props.theme?.colors?.secondary || "#666"};
	font-weight: 400;
	letter-spacing: 1px;
`;

export const DevelopmentMessage = styled.div`
	background: ${(props) => props.theme?.colors?.white || "#fff"};
	border-radius: 12px;
	padding: 3rem 2rem;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	border: 1px solid ${(props) => props.theme?.colors?.greyLight || "#e0e0e0"};
	text-align: center;
	max-width: 600px;
	width: 100%;
`;

export const DevelopmentIcon = styled.div`
	font-size: 4rem;
	margin-bottom: 1rem;
`;

export const DevelopmentTitle = styled.h3`
	font-family: "Philosopher", serif;
	font-size: 1.8rem;
	color: ${(props) => props.theme?.colors?.secondary || "#666"};
	margin-bottom: 1rem;
	font-weight: 700;
`;

export const DevelopmentText = styled.p`
	font-size: 1.1rem;
	color: ${(props) => props.theme?.colors?.fontColorStandart || "#444"};
	line-height: 1.6;
	margin-bottom: 2rem;
`;

export const FeaturesList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

export const FeatureItem = styled.li`
	font-size: 1rem;
	color: ${(props) => props.theme?.colors?.fontColorStandart || "#444"};
	text-align: left;
	padding: 0.5rem 0;
	border-bottom: 1px solid ${(props) => props.theme?.colors?.greyLight || "#f0f0f0"};

	&:last-child {
		border-bottom: none;
	}
`;
