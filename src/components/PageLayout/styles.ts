import styled from "styled-components";

export const PageContainer = styled.div`
	min-height: 100vh;
	padding-top: 100px; /* Espaço para o header fixo */
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	background: ${(props) => props.theme?.colors?.primary || "#f8f6f0"};

	@media (max-width: 768px) {
		padding-top: 90px; /* Padding menor para mobile onde o menu tem 70px */
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
`;

export const ShowcaseSection = styled.section`
	width: 100%;
	min-height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 768px) {
		min-height: calc(100vh - 90px);
	}
`;
