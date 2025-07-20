import styled from "styled-components";

export const ShowcaseSection = styled.section`
	width: 100%;
	min-height: 100vh;
	padding-top: 100px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background: ${(props) => props.theme.colors.background};

	@media (max-width: 768px) {
		padding-top: 90px;
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export const ResultsInfo = styled.div`
	text-align: center;
	background: ${(props) => props.theme.colors.primaryLight};
	border-radius: ${(props) => props.theme.borderRadius.md};
	color: ${(props) => props.theme.colors.fontColorDark};
	font-size: ${(props) => props.theme.fontSizes.sm};
	font-family: ${(props) => props.theme.fonts.body};
	width: 100%;
	max-width: 1200px;
`;
