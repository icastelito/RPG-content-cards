import styled from "styled-components";

export const Background = styled.div`
	margin: 0;
	padding: 0;
	text-decoration: none;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
`;

export const HeaderContent = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0;
`;

export const MainContent = styled.main`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #061724;
	padding: 10%;
`;

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
