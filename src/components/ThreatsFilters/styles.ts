import styled from "styled-components";

export const FiltersContainer = styled.div`
	background: ${(props) => props.theme.colors.background};
	border-radius: ${(props) => props.theme.borderRadius.lg};
	padding: ${(props) => props.theme.spacing.lg};
	margin-bottom: ${(props) => props.theme.spacing.xl};
	margin-top: ${(props) => props.theme.spacing.xl};
	box-shadow: ${(props) => props.theme.shadows.md};
	border: 1px solid ${(props) => props.theme.colors.greyLight};
	width: 100%;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;

export const SearchSection = styled.div`
	position: relative;
	margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
	padding-right: 45px;
	border: 2px solid ${(props) => props.theme.colors.greyLight};
	border-radius: ${(props) => props.theme.borderRadius.md};
	font-size: ${(props) => props.theme.fontSizes.base};
	font-family: ${(props) => props.theme.fonts.body};
	transition: all 0.3s ease;
	background: ${(props) => props.theme.colors.surface};
	color: ${(props) => props.theme.colors.textOnSurface};

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.secondary};
		box-shadow: 0 0 0 3px ${(props) => props.theme.colors.secondary}20;
	}

	&::placeholder {
		color: ${(props) => props.theme.colors.grey};
	}
`;

export const FiltersSection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: ${(props) => props.theme.spacing.md};
	align-items: end;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const FilterGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.spacing.xs};
`;

export const FilterLabel = styled.label`
	font-size: ${(props) => props.theme.fontSizes.sm};
	font-weight: 600;
	color: ${(props) => props.theme.colors.fontColorDark};
	font-family: ${(props) => props.theme.fonts.body};
`;

export const FilterSelect = styled.select`
	padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
	border: 2px solid ${(props) => props.theme.colors.greyLight};
	border-radius: ${(props) => props.theme.borderRadius.md};
	font-size: ${(props) => props.theme.fontSizes.sm};
	font-family: ${(props) => props.theme.fonts.body};
	background: ${(props) => props.theme.colors.surface};
	color: ${(props) => props.theme.colors.textOnSurface};
	cursor: pointer;
	transition: all 0.3s ease;

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.colors.secondary};
		box-shadow: 0 0 0 3px ${(props) => props.theme.colors.secondary}20;
	}

	option {
		padding: ${(props) => props.theme.spacing.xs};
	}
`;

export const ClearButton = styled.button`
	padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
	background: linear-gradient(
		135deg,
		${(props) => props.theme.colors.secondary} 0%,
		${(props) => props.theme.colors.secondaryDark} 100%
	);
	color: ${(props) => props.theme.colors.white};
	border: none;
	border-radius: ${(props) => props.theme.borderRadius.md};
	font-size: ${(props) => props.theme.fontSizes.sm};
	font-weight: 600;
	font-family: ${(props) => props.theme.fonts.body};
	cursor: pointer;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 0.5px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${(props) => props.theme.shadows.md};
	}

	&:active {
		transform: translateY(0);
	}
`;

export const ResultsInfo = styled.div`
	text-align: center;
	margin: ${(props) => props.theme.spacing.lg} 0;
	padding: ${(props) => props.theme.spacing.md};
	background: ${(props) => props.theme.colors.surface};
	border-radius: ${(props) => props.theme.borderRadius.md};
	color: ${(props) => props.theme.colors.textOnSurface};
	font-size: ${(props) => props.theme.fontSizes.sm};
	font-family: ${(props) => props.theme.fonts.body};
`;
