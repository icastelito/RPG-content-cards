import styled from "styled-components";

export const Container = styled.div`
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
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme.background};
	min-height: 100vh;
	color: ${(props) => props.theme.textOnSurface};
	padding: 100px 20px 20px 20px;
`;

// Layout Principal
export const A4Container = styled.div`
	width: 210mm;
	min-width: 210mm;
	max-width: 210mm;
	min-height: 297mm;
	max-height: 297mm;
	height: 297mm;
	background-color: var(--card-background);
	border: 1px solid var(--border-color);
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	position: relative;
	margin: 20px 0;
	padding: 5mm;
	overflow: hidden;

	@media print {
		width: 210mm;
		min-height: 297mm;
		margin: 0;
		box-shadow: none;
		border: none;
	}
`;

export const Header = styled.div`
	background: var(--primary-color);
	color: var(--card-background);
	padding: 20px;
	text-align: center;
	border-radius: 8px 8px 0 0;
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ExportButton = styled.button`
	background: var(--secondary-color);
	color: var(--card-background);
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

// Layout Moderno - 30/70
export const ModernLayout = styled.div`
	display: flex;
	height: calc(100% - 80px);
	min-height: 1000px;
`;

export const LeftPanel = styled.div`
	width: 60mm;
	height: 280mm;
	background: var(--card-background);
	border-right: 2px solid var(--border-color);
	display: flex;
	flex-direction: column;
	padding: 2mm;
	justify-content: space-between;
	background: var(--background-color);
`;

export const RightPanel = styled.div`
	width: 70%;
	height: 280mm;
	margin-left: 5mm;
	background: var(--card-background);
	overflow-y: auto;
`;

// Blocos de Atributo e Perícia
export const AttributeSkillBlock = styled.div``;

export const AttributeHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	margin-top: 8px;
	font-weight: bold;
	color: var(--primary-color);
	font-size: 14px;
`;

export const AttributeValue = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const AttributeInput = styled.input`
	width: 40px;
	padding: 4px;
	border: 1px solid var(--border-color);
	border-radius: 40px;
	text-align: center;
	background: var(--card-background);
	color: var(--text-color);
	font-size: 12px;

	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}
`;

export const SkillsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const SkillItem = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 11px;
`;

export const SkillCheckbox = styled.input`
	width: 12px;
	height: 12px;
`;

export const SkillName = styled.span`
	flex: 1;
	color: var(--text-color);
`;

export const SkillInput = styled.input`
	width: 30px;
	padding: 2px;
	border: 1px solid var(--border-color);
	border-radius: 2px;
	text-align: center;
	background: var(--card-background);
	color: var(--text-color);
	font-size: 10px;

	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}
`;

// Cabeçalho do Personagem (Lado Direito)
export const CharacterHeader = styled.div`
	margin-bottom: 20px;
`;

export const CharacterInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 120px;
	gap: 20px;
	margin-bottom: 16px;
`;

export const FormField = styled.div`
	margin-bottom: 4px;
`;

export const FormRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
`;

export const CharacterImageContainer = styled.div`
	position: relative;
	width: 120px;
	height: 120px;
	border: 2px solid var(--border-color);
	border-radius: 8px;
	overflow: hidden;
	background: var(--background-color);
`;

export const CharacterIcon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 48px;
	color: var(--secondary-color);
`;

export const CharacterImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const OverlayFields = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	padding: 4px;
`;

export const OverlayField = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	color: white;
	text-align: center;
	font-size: 10px;

	&::placeholder {
		color: white;
	}
`;

// Status do Personagem
export const StatusBlock = styled.div`
	background: var(--background-color);
	border: 2px solid var(--border-color);
	border-radius: 8px;
	padding: 16px;
	margin-bottom: 20px;
`;

export const StatusRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-bottom: 12px;
`;

export const StatusInput = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	text-align: center;
	background: var(--card-background);
	color: var(--text-color);
`;

// Separadores
export const SeparatorLine = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const Line = styled.div`
	flex: 1;
	height: 2px;
	background: var(--border-color);
`;

// Seção de Armas
export const WeaponsSection = styled.div`
	margin-bottom: 20px;
`;

export const WeaponsTable = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
	gap: 8px;
	margin-bottom: 8px;
`;

export const WeaponInput = styled.input`
	padding: 6px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	background: var(--card-background);
	color: var(--text-color);
`;

// Seção de Características
export const FeaturesSection = styled.div`
	margin-bottom: 20px;
`;

export const FeatureTextarea = styled.textarea`
	width: 100%;
	height: 80px;

	padding: 12px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	background: var(--card-background);
	background-image: linear-gradient(rgba(200, 200, 200, 0.2) 1px, transparent 1px),
		linear-gradient(90deg, rgba(200, 200, 200, 0.2) 1px, transparent 1px);
	background-size: 20px 20px;
	color: var(--text-color);
	resize: none;
	font-family: inherit;
	line-height: 20px;
	overflow-y: auto;
`;

// Rodapé
export const Footer = styled.div`
	text-align: center;
	padding: 16px;
	color: var(--secondary-color);
	font-size: 12px;
	border-top: 1px solid var(--border-color);
`;

// Componentes de Status que estavam faltando
export const CharacterStats = styled.div`
	background: var(--background-color);
	border: 2px solid var(--border-color);
	border-radius: 8px;
	padding: 16px;
	margin-bottom: 20px;
`;

export const StatBlockRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	margin-bottom: 12px;
`;

export const StatRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const StatInput = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	text-align: center;
	background: var(--card-background);
	color: var(--text-color);
`;

// Labels para os campos
export const Label = styled.label`
	font-size: 12px;
	font-weight: bold;
	color: var(--primary-color);
	margin-bottom: 4px;
	display: block;
`;

export const Input = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	background: var(--card-background);
	color: var(--text-color);

	&::placeholder {
		color: var(--secondary-color);
	}
`;

// Componentes específicos para PV, PM, PE
export const PointsContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`;

export const PointsLabel = styled.span`
	font-size: 12px;
	font-weight: bold;
	color: var(--primary-color);
	min-width: 20px;
`;

export const PointsInput = styled.input`
	width: 40px;
	height: 40px;
	border: 2px solid var(--border-color);
	border-radius: 50%;
	text-align: center;
	background: var(--card-background);
	color: var(--text-color);
	font-size: 12px;
	font-weight: bold;

	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}

	&:focus {
		outline: none;
		border-color: var(--primary-color);
	}
`;

export const PointsSeparator = styled.span`
	color: var(--secondary-color);
	font-size: 12px;
	font-weight: bold;
`;

// Componentes para campos de linha com label abaixo
export const LineFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 12px;
`;

export const LineInput = styled.input`
	width: 100%;
	padding: 4px 0;
	border: none;
	border-bottom: 2px solid var(--border-color);
	background: transparent;
	color: var(--text-color);
	font-size: 14px;
	text-align: center;

	&:focus {
		outline: none;
		border-bottom-color: var(--primary-color);
	}

	&::placeholder {
		color: var(--secondary-color);
	}
	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const LineLabel = styled.label`
	font-size: 11px;
	font-weight: bold;
	color: var(--primary-color);
	margin-top: 4px;
	text-transform: uppercase;
`;

// Componente para caixa de pontos de vida estilo tabela
export const PointsBox = styled.div`
	width: 40mm;
`;

export const PointsBoxTitle = styled.div`
	color: var(--text-color);
	text-align: center;
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
`;

export const PointsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

export const PointsTableHeader = styled.div`
	background: var(--background-color);
	border-right: 1px solid var(--border-color);
	color: black;
	padding: 4px 8px;
	text-align: center;
	font-size: 10px;
	font-weight: bold;
	text-transform: uppercase;
	border-bottom: 1px solid var(--border-black);

	&:last-child {
		border-right: none;
	}
`;

export const PointsTableCell = styled.div`
	border-right: 1px solid var(--border-color);
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 40px;

	&:last-child {
		border-right: none;
	}
`;

export const PointsTableInput = styled.input`
	width: 100%;
	border: none;
	background: transparent;
	text-align: center;
	font-size: 14px;
	color: var(--text-color);

	&:focus {
		outline: none;
		background: var(--background-color);
	}

	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

// Novos componentes para layout de pontos customizado
export const PointsBoxCustom = styled.div`
	width: 35mm;
	display: flex;
	flex-direction: column;
	background: var(--card-background);
	border-radius: 4px;
`;

export const PointsContent = styled.div`
	display: flex;
	flex-direction: row;
	background: var(--background-color);
`;

export const PointsLeft = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
`;

export const PointsRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border-left: 1px solid var(--border-color);
`;

export const PointsRightTop = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PointsRightBottom = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PointsLineInput = styled.input`
	border: none;
	border-bottom: 1px solid var(--border-color);
	width: 80%;
	background: transparent;
	text-align: center;
	font-size: 14px;
	color: var(--text-color);
	padding: 2px 4px;
	margin-bottom: 2px;

	&:focus {
		outline: none;
		border-bottom: 2px solid var(--primary-color);
	}

	/* Remove os botões de incremento/decremento do input number */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const PointsLineLabel = styled.span`
	font-size: 2mm;
	font-weight: bold;
	text-transform: uppercase;
	color: var(--text-color);
	text-align: start;
	width: 80%;
`;

// Componentes para seção de Pontos de Anima e Cicatrizes
export const StatusSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0;
`;

export const StatusGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3px;
`;

export const StatusLabel = styled.p`
	font-size: 12px;
	font-weight: bold;
	color: var(--text-color);
	margin: 0;
	margin-right: 8px;
`;

export const RoundCheckbox = styled.div`
	display: inline-block;
	width: 3mm;
	height: 3mm;
	border: 1px solid var(--border-black);
	border-radius: 50%;
	background: var(--card-background);
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;

	&:hover {
		border-color: var(--primary-color);
	}
`;
