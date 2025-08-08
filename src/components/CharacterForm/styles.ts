import styled from "styled-components";

export const FormContainer = styled.div`
	background: ${({ theme }) => theme.colors.card};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 12px;
	padding: 2rem;
	margin-top: 2rem;
`;

export const FormHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
	padding-bottom: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
		align-items: stretch;
	}
`;

export const FormTitle = styled.h2`
	font-size: 1.8rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	margin: 0;
	font-family: "TrajanPro", serif;
`;

export const ActionsContainer = styled.div`
	display: flex;
	gap: 0.5rem;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

export const ActionButton = styled.button<{ $variant: "primary" | "secondary" | "success" }>`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1rem;
	border: none;
	border-radius: 6px;
	font-size: 0.9rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;

	background: ${({ theme, $variant }) => {
		switch ($variant) {
			case "primary":
				return theme.colors.primary;
			case "secondary":
				return theme.colors.secondary;
			case "success":
				return theme.colors.success || "#28a745";
			default:
				return theme.colors.primary;
		}
	}};

	color: white;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: translateY(0);
	}
`;

export const FormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FieldLabel = styled.label`
	font-size: 0.9rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ErrorText = styled.span`
	font-size: 0.8rem;
	color: #dc3545;
	font-weight: 400;
`;

export const TextInput = styled.input<{ $hasError?: boolean }>`
	padding: 0.75rem;
	border: 2px solid ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.border)};
	border-radius: 6px;
	font-size: 1rem;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	transition: border-color 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.primary)};
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;

export const SelectInput = styled.select<{ $hasError?: boolean }>`
	padding: 0.75rem;
	border: 2px solid ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.border)};
	border-radius: 6px;
	font-size: 1rem;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	transition: border-color 0.2s ease;
	cursor: pointer;

	&:focus {
		outline: none;
		border-color: ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.primary)};
	}

	option {
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
	}
`;

export const NumberInput = styled.input<{ $hasError?: boolean }>`
	padding: 0.75rem;
	border: 2px solid ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.border)};
	border-radius: 6px;
	font-size: 1rem;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	transition: border-color 0.2s ease;
	width: 100px;

	&:focus {
		outline: none;
		border-color: ${({ theme, $hasError }) => ($hasError ? "#dc3545" : theme.colors.primary)};
	}

	/* Remove setas do input number no Chrome */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Remove setas do input number no Firefox */
	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

// Skills Section Styles
export const SkillsSection = styled.div`
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 2px solid ${({ theme }) => theme.colors.border};
`;

export const SectionTitle = styled.h3`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 1.5rem;
	font-family: "TrajanPro", serif;
`;

export const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 1rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const SkillItem = styled.div`
	background: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 8px;
	padding: 1rem;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
`;

export const SkillCheckbox = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	margin-bottom: 0.5rem;

	input[type="checkbox"] {
		margin-top: 0.25rem;
		width: 18px;
		height: 18px;
		accent-color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
	}

	label {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex: 1;
	}
`;

export const SkillName = styled.span`
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	text-transform: capitalize;
	font-size: 1rem;
`;

export const SkillAttribute = styled.span`
	font-size: 0.85rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-style: italic;
`;

export const SkillDescription = styled.p`
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	margin: 0;
	line-height: 1.4;
`;
