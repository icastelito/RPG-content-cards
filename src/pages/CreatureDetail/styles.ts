import styled from "styled-components";

export const DetailContainer = styled.div`
	padding: 2rem 1rem;
	padding-top: 100px; /* Espaço para o header fixo */
	min-height: calc(100vh - 80px);
	background: ${(props) => props.theme.colors.background};
	max-width: 1600px;
	margin: 0 auto;

	@media (max-width: 768px) {
		padding-top: 90px; /* Padding menor para mobile */
	}
`;

export const BackButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: ${(props) => props.theme.colors.primary};
	color: white;
	border: none;
	border-radius: 8px;
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-bottom: 2rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&:hover {
		background: ${(props) => props.theme.colors.primaryDark};
		transform: translateY(-2px);
	}
`;
