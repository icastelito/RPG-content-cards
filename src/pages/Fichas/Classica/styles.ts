import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme";

// Cores e variáveis do tema original
export const Container = styled.div<ThemeProps>`
	--primary-color: #2c2c2c;
	--secondary-color: #4a4a4a;
	--accent-color: #1a1a1a;
	--background-color: #f8f6f0;
	--card-background: #ffffff;
	--text-color: #2c2c2c;
	--border-color: #d4d4d4;
	--border-black: #000000;
	--success-color: #4a4a4a;
	--warning-color: #666666;
	--paper-texture: #fefefe;

	font-family: "Source Serif 4", serif;
	background-color: ${(props) => props.theme?.colors?.primary || "var(--secondary-color)"};
	min-height: 100vh;
	padding: 100px 20px 20px 20px; /* Adicionado padding-top de 100px para compensar o menu fixo */
	color: ${(props) => props.theme?.colors?.fontColorStandart || "var(--text-color)"};
	line-height: 1.6;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	@media (max-width: 768px) {
		padding: 90px 20px 20px 20px; /* Padding menor para mobile onde o menu tem 70px */
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.philosopher-bold {
		font-family: "Philosopher", serif;
		font-weight: 700;
	}
`;

export const A4Container = styled.div`
	width: 210mm;
	min-height: 297mm;
	max-width: 297mm;
	background-color: var(--card-background);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	padding: 10mm;
	box-sizing: border-box;
	position: relative;
	margin: 20px auto;

	@media screen and (max-width: 768px) {
		width: 100%;
		min-height: auto;
		margin: 10px;
		padding: 15px;
		box-shadow: none;
	}

	@media print {
		width: 100%;
		min-height: auto;
		box-shadow: none;
		margin: 0;
		padding: 15mm;
		page-break-after: always;

		&:last-child {
			page-break-after: auto;
		}
	}
`;

export const Header = styled.header<ThemeProps>`
	text-align: center;
	margin-bottom: 20px;
`;

export const HeaderContent = styled.div<ThemeProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 210mm;
	margin: 0 auto;
	padding: 0 20px;

	h1 {
		font-family: "Philosopher", serif;
		font-weight: 700;
		color: ${(props) => props.theme?.colors?.fontColorDark || "var(--primary-color)"};
		font-size: 2rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 10px;
	}

	@media print {
		justify-content: center;
	}
`;

export const ExportButton = styled.button<ThemeProps>`
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 8px 16px;
	background: ${(props) => props.theme?.colors?.secondary || "var(--primary-color)"};
	color: ${(props) => props.theme?.colors?.white || "white"};
	border: none;
	border-radius: 5px;
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

	&:hover {
		background: ${(props) => props.theme?.colors?.secondaryDark || "var(--accent-color)"};
	}
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	svg {
		font-size: 16px;
	}

	@media print {
		display: none !important;
	}
`;

export const CharacterHeader = styled.main`
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media screen and (max-width: 768px) {
		gap: 15px;
	}
`;

export const CharacterInfo = styled.section`
	background: transparent;
	border: 2px solid var(--border-color);
	padding: 10px 10px 0px 10px;
	margin: 0;
	width: 80mm;
	min-width: 80mm;
	max-width: 80mm;
	height: 38mm;
	top: 0;
	left: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const CharacterImageContainer = styled.section`
	position: relative;
	width: 29mm;
	height: 38mm;
	border-radius: 30mm;
	border: 2px solid var(--border-color);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--background-color);
	transition: all 0.3s ease;

	&:hover svg {
		color: var(--primary-color);
	}
`;

export const CharacterIcon = styled.div`
	svg {
		font-size: 60px;
		color: var(--secondary-color);
		transition: color 0.3s ease;
	}
`;

export const CharacterImage = styled.img`
	object-fit: fill;
	width: 29mm;
	height: 38mm;
	border-radius: 30mm;
`;

export const OverlayFields = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

export const OverlayField = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	pointer-events: auto;

	label {
		font-size: 2.5mm;
		color: var(--primary-color);
		font-family: "Comfortaa", sans-serif;
		font-weight: 600;
		text-transform: uppercase;
		line-height: 1;
		margin-bottom: 1mm;
	}

	input {
		width: 10mm;
		height: 10mm;
		border: 2px solid var(--border-color);
		border-radius: 10mm;
		background: transparent;
		text-align: center;
		font-size: 4.5mm;
		font-family: "Trajan-Pro-Regular", serif;
		font-weight: 700;
		color: var(--primary-color);
		padding: 0;
		transition: border-color 0.3s ease;
		background-color: #ffffffdd;

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type="number"] {
			appearance: textfield;
			-moz-appearance: textfield;
		}
	}

	&.top-left {
		top: -2mm;
		left: -2mm;
	}

	&.bottom-right {
		bottom: -2mm;
		right: -2mm;
	}
`;

export const CharacterStats = styled.section`
	background: transparent;
	border: 2px solid var(--border-color);
	margin: 0;
	width: 80mm;
	min-width: 80mm;
	max-width: 80mm;
	height: 38mm;
	top: 0;
	left: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-evenly;
`;

export const StatBlockRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 33mm;

	label {
		color: var(--primary-color);
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 9px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: normal;
		align-items: center;
		width: 4mm;
	}
`;

export const StatRow = styled.div`
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	width: 10mm;
	height: 18mm;
	display: flex;
	flex-direction: column;

	label {
		width: 10mm;
		text-align: center;
	}
`;

export const StatInput = styled.input`
	border-radius: 3px;
	width: 10mm;
	height: 10mm;
	border: 2px solid var(--border-color);
	border-radius: 5mm;
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 12px;
	color: var(--text-color);
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	transition: border-color 0.3s ease;
	background: transparent;
	padding: 0;
	line-height: 1;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		appearance: textfield;
		-moz-appearance: textfield;
	}
`;

export const StatBlockSide = styled.aside`
	display: flex;
	height: 35mm;
	width: 30mm;
	flex-direction: column;
	display: flex;
	justify-content: space-evenly;

	label {
		color: var(--primary-color);
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 9px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: normal;
	}
`;

export const StatBlockDescription = styled.div`
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 0;

	label {
		margin-bottom: 8px;
		color: var(--primary-color);
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: normal;
	}

	input,
	select {
		width: 100%;
		border: none;
		border-bottom: 2px solid var(--border-color);
		background: transparent;
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 12px;
		color: var(--text-color);
		transition: border-color 0.3s ease;

		&:focus {
			outline: none;
			border-bottom-color: var(--primary-color);
		}

		&::placeholder {
			color: var(--secondary-color);
			opacity: 0.7;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 0;
`;

export const SeparatorLine = styled.section`
	margin: 10px 0;
	text-align: center;
	flex-direction: row;
	justify-content: space-between;
	display: flex;
	width: 100%;

	h5 {
		font-family: "Philosopher", serif;
		font-weight: 700;
		color: var(--primary-color);
		font-size: 5mm;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
`;

export const Line = styled.div`
	width: 45%;
	height: 1px;
	background-color: var(--border-color);
	align-self: center;
`;

export const CharacterAbilitiesContainer = styled.main`
	flex-direction: wrap;
	display: flex;
	justify-content: space-between;
`;

export const CharacterSkills = styled.section`
	margin-top: 5mm;
	width: 60mm;
`;

export const SkillsHeader = styled.div<ThemeProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h2 {
		margin-bottom: 0;
		font-size: 5mm;
		font-family: "Philosopher", serif;
		font-weight: 700;
		color: var(--primary-color);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		gap: 2.5mm;
		text-align: center;
	}
`;

export const SortButtons = styled.div`
	display: flex;
	gap: 1mm;

	@media screen and (max-width: 768px) {
		justify-content: center;
	}
`;

export const SortButton = styled.button<ThemeProps>`
	padding: 1mm 2mm;
	border: 0.3mm solid var(--border-color);
	background: var(--card-background);
	color: var(--text-color);
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 2mm;
	text-transform: uppercase;
	letter-spacing: 0.1mm;
	cursor: pointer;
	border-radius: 1mm;
	transition: all 0.3s ease;

	&:hover {
		border-color: var(--primary-color);
		background: var(--background-color);
	}

	&.active {
		background: var(--primary-color);
		color: var(--card-background);
		border-color: var(--primary-color);
	}
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		gap: 1.5mm;
	}
`;

export const Skill = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3mm;
	border-bottom: 1px solid var(--border-color);
	background: var(--card-background);
	min-height: 3mm;

	@media screen and (max-width: 768px) {
		padding: 1.5mm;
		min-height: 7mm;
	}
`;

export const SkillCheckbox = styled.div`
	position: relative;
	margin-bottom: 0;
	flex-shrink: 0;
`;

export const SkillTrained = styled.input`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 3mm;
	height: 3mm;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		width: 2.5mm;
		height: 2.5mm;
	}
`;

export const CheckboxLabel = styled.label`
	display: inline-block;
	width: 3mm;
	height: 3mm;
	border: 0.5mm solid var(--border-color);
	border-radius: 50%;
	background: var(--card-background);
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;

	${SkillTrained}:checked + & {
		background: var(--primary-color);
		border-color: var(--primary-color);

		&::after {
			content: "✓";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: var(--card-background);
			font-size: 2mm;
			font-weight: bold;
		}
	}

	@media screen and (max-width: 768px) {
		width: 2.5mm;
		height: 2.5mm;
	}
`;

export const SkillName = styled.label<ThemeProps>`
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 3mm;
	text-transform: uppercase;
	letter-spacing: 0.1mm;
	color: var(--primary-color);
	text-align: left;
	line-height: 1.2;
	margin: 0;
	flex: 1;

	@media screen and (max-width: 768px) {
		font-size: 2mm;
	}
`;

export const SkillInput = styled.input`
	width: 6mm;
	height: 6mm;
	border: 0.5mm solid var(--border-color);
	border-radius: 50%;
	background: transparent;
	text-align: center;
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 3mm;
	color: var(--text-color);
	padding: 0;
	line-height: 1;
	transition: border-color 0.3s ease;
	flex-shrink: 0;

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		appearance: textfield;
		-moz-appearance: textfield;
	}

	@media screen and (max-width: 768px) {
		width: 5mm;
		height: 5mm;
		font-size: 2mm;
	}
`;

export const CharacterWeapons = styled.section`
	margin-top: 5mm;
	width: 120mm;
`;

export const WeaponsTableHeader = styled.div<ThemeProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	border: 1px solid var(--border-color);
	border-radius: 2mm;
	background: var(--card-background);

	h2 {
		background: var(--background-color);
		border-bottom: 1px solid var(--border-color);
		padding: 1.5mm 3mm;
		text-align: center;
		margin: 0;
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 2.5mm;
		font-weight: 700;
		color: var(--primary-color);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
`;

export const WeaponsTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	background: var(--card-background);
	table-layout: fixed;
	border: none;
	margin: 0;

	tr {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	th {
		font-family: "Trajan-Pro-Regular", serif;
		font-weight: 700;
		color: var(--primary-color);
		font-size: 2mm;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		text-align: center;
		background: var(--background-color);
		padding: 1mm;
		border-bottom: 1px solid var(--border-color);

		&:nth-child(1) {
			width: 40mm;
		}

		&:nth-child(2) {
			width: 15mm;
		}

		&:nth-child(3) {
			width: 15mm;
		}

		&:nth-child(4) {
			width: 50mm;
		}
	}

	td {
		padding: 0.2mm;
		border: 0.1mm solid var(--border-color);
		text-align: center;
		font-family: "Source Serif 4", serif;
		font-size: 2mm;
		width: 100%;
		height: 5mm;
		color: var(--text-color);

		&:nth-child(1) {
			width: 40mm;
		}

		&:nth-child(2) {
			width: 15mm;
		}

		&:nth-child(3) {
			width: 15mm;
		}

		&:nth-child(4) {
			width: 50mm;
		}
	}
`;

export const WeaponsThead = styled.thead`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 3mm;
`;

export const WeaponInput = styled.input`
	width: 100%;
	border: none;
	background: transparent;
	text-align: center;
	font-family: "Source Serif 4", serif;
	font-size: 3mm;
	color: var(--text-color);
	padding: 0.1mm;
	outline: none;

	&::placeholder {
		color: var(--secondary-color);
		opacity: 0.6;
		font-style: italic;
	}

	&:focus {
		outline: none;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 1mm;
	}
`;

export const CharacterFeatures = styled.section`
	width: 120mm;
	margin-top: 3mm;
`;

export const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3mm;
`;

export const FeatureSection = styled.div`
	border: 1px solid var(--border-color);
	border-radius: 2mm;
	background: var(--card-background);

	&.class-features .feature-content {
		min-height: 30mm;
	}

	&.species-traits,
	&.talents {
		flex: 1;

		.feature-content {
			min-height: 25mm;
		}
	}
`;

export const FeatureHeader = styled.div<ThemeProps>`
	background: var(--background-color);
	border-bottom: 1px solid var(--border-color);
	padding: 1.5mm 3mm;
	text-align: center;

	h3 {
		font-family: "Trajan-Pro-Regular", serif;
		font-size: 2.5mm;
		font-weight: 700;
		color: ${(props) => props.theme?.colors?.fontColorDark || "var(--primary-color)"};
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 0;
	}
`;

export const FeatureContent = styled.div`
	padding: 2mm;
	display: flex;
	gap: 2mm;
`;

export const FeatureTextarea = styled.textarea`
	width: 100%;
	min-height: 25mm;
	border: none;
	background: transparent;
	font-family: "Source Serif 4", serif;
	font-size: 2.5mm;
	color: var(--text-color);
	padding: 1mm;
	resize: vertical;
	line-height: 1.4;

	&:focus {
		outline: none;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 1mm;
	}

	&::placeholder {
		color: var(--secondary-color);
		opacity: 0.6;
		font-style: italic;
	}
`;

export const FeatureLeft = styled.div`
	flex: 1;
`;

export const FeatureRight = styled.div`
	flex: 1;
`;

export const FeatureDivider = styled.div`
	width: 1px;
	background: var(--border-color);
	margin: 0 1mm;
`;

export const FeaturesRow = styled.div`
	display: flex;
	gap: 3mm;
`;

export const AbilitiesHeader = styled.span<ThemeProps>`
	h2 {
		font-family: "Philosopher", serif;
		font-weight: 700;
		color: ${(props) => props.theme?.colors?.fontColorDark || "var(--primary-color)"};
		font-size: 5mm;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
`;

export const AbilityName = styled.span<ThemeProps>`
	font-family: "Trajan-Pro-Regular", serif;
	font-size: 3mm;
	color: ${(props) => props.theme?.colors?.fontColorDark || "var(--primary-color)"};
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-weight: 700;
`;

export const Footer = styled.footer<ThemeProps>`
	text-align: center;
	margin-top: 20px;
	padding: 10px;
	color: ${(props) => props.theme?.colors?.fontColorLight || "var(--secondary-color)"};
	font-style: italic;
	font-size: 0.8rem;
`;
