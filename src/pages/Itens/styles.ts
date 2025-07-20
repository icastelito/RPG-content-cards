import styled from "styled-components";

export const ShowcaseSection = styled.section`
	width: 100%;
	min-height: 100vh;
	padding-top: 100px; /* Espaço para o header fixo */
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 768px) {
		padding-top: 90px;
		padding-left: 10px;
		padding-right: 10px;
	}
`;
