import styled from "styled-components";

export const ShowcaseSection = styled.section`
	padding: 2rem 1rem;
	min-height: calc(100vh - 80px);
	padding-top: 100px;
	background: ${(props) => props.theme.colors.background};
`;

export const PageTitle = styled.h1`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 2rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const FiltersContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	flex-wrap: wrap;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const SearchInput = styled.input`
	padding: 0.75rem 1rem;
	border: 2px solid ${(props) => props.theme.colors.border};
	border-radius: 8px;
	background: ${(props) => props.theme.colors.cardBackground};
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1rem;
	width: 300px;
	transition: border-color 0.3s ease;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
	}

	&::placeholder {
		color: ${(props) => props.theme.colors.fontColorSecondary};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const FilterSelect = styled.select`
	padding: 0.75rem 1rem;
	border: 2px solid ${(props) => props.theme.colors.border};
	border-radius: 8px;
	background: ${(props) => props.theme.colors.cardBackground};
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1rem;
	min-width: 200px;
	cursor: pointer;
	transition: border-color 0.3s ease;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ClearButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: ${(props) => props.theme.colors.secondary};
	color: white;
	border: none;
	border-radius: 8px;
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: ${(props) => props.theme.colors.secondaryDark};
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ResultsInfo = styled.div`
	text-align: center;
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1rem;
	margin-bottom: 2rem;
	font-weight: bold;
`;
