import styled from "styled-components";

export const EquipmentContainer = styled.div`
	padding: 16px;
	background: ${({ theme }) => theme.colors.card};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	overflow-y: auto;
`;

export const SectionTitle = styled.h3`
	margin: 0 0 16px 0;
	font-size: 18px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.fontColorStandart};
	border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
	padding-bottom: 8px;
`;

export const EmptyMessage = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-style: italic;
	padding: 20px;
`;

export const ItemTypeSection = styled.div`
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const ItemTypeTitle = styled.h4`
	margin: 0 0 12px 0;
	font-size: 16px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.secondary};
	padding-left: 8px;
	border-left: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export const ItemCard = styled.div<{ $trained?: boolean }>`
	background: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme, $trained }) => ($trained ? theme.colors.success : theme.colors.border)};
	border-radius: 6px;
	padding: 12px;
	margin-bottom: 8px;
	transition: all 0.2s ease;

	&:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transform: translateY(-1px);
	}

	&:last-child {
		margin-bottom: 0;
	}

	${({ $trained, theme }) =>
		$trained &&
		`
		background: ${theme.colors.success}10;
		border-left: 4px solid ${theme.colors.success};
	`}
`;

export const ItemHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
`;

export const ItemName = styled.h5<{ $rarity: string }>`
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	color: ${({ theme, $rarity }) => {
		switch ($rarity.toLowerCase()) {
			case "comum":
				return theme.colors.text;
			case "incomum":
				return "#2E8B57"; // Verde mar
			case "raro":
				return "#4169E1"; // Azul real
			case "muito raro":
				return "#8A2BE2"; // Azul violeta
			case "lendário":
				return "#FF8C00"; // Laranja escuro
			case "artefato":
				return "#FFD700"; // Dourado
			default:
				return theme.colors.text;
		}
	}};
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const AnimaSymbols = styled.span`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.secondary};
	font-weight: bold;
	opacity: 0.9;
`;

export const TrainingBadge = styled.span`
	background: ${({ theme }) => theme.colors.success};
	color: white;
	font-size: 10px;
	font-weight: 600;
	padding: 2px 6px;
	border-radius: 10px;
	text-transform: uppercase;
`;

export const ItemDetails = styled.div`
	margin-bottom: 8px;
`;

export const ItemDetail = styled.div`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.fontColorStandart};
	margin-bottom: 4px;
	line-height: 1.4;

	&:last-child {
		margin-bottom: 0;
	}

	strong {
		color: ${({ theme }) => theme.colors.fontColorStandart};
		font-weight: 600;
	}
`;

export const ItemDescription = styled.div`
	font-size: 11px;
	color: ${({ theme }) => theme.colors.textSecondary};
	line-height: 1.3;
	border-top: 1px solid ${({ theme }) => theme.colors.border};
	padding-top: 6px;
	margin-top: 6px;

	div {
		margin-bottom: 3px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;
