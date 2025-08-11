import styled from "styled-components";

export const CreatureCard = styled.div`
	background: ${(props) => props.theme.colors.cardBackground};
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 12px;
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CreatureLayout = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr 250px;
	gap: 2rem;
	margin-top: 2rem;

	@media (max-width: 1024px) {
		grid-template-columns: 200px 1fr 200px;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const SkillsColumn = styled.div`
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	border-radius: 8px;
	padding: 1rem;
	height: fit-content;

	@media (max-width: 768px) {
		order: 2;
	}
`;

export const MainContent = styled.div`
	@media (max-width: 768px) {
		order: 1;
	}
`;

export const EquipmentColumn = styled.div`
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	border-radius: 8px;
	padding: 1rem;
	height: fit-content;

	@media (max-width: 768px) {
		order: 3;
	}
`;

export const SkillsSection = styled.div`
	margin-bottom: 1rem;
`;

export const SkillsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SortButtons = styled.div`
	display: flex;
	gap: 0.25rem;
`;

export const SortButton = styled.button<{ $active: boolean }>`
	background: ${(props) => (props.$active ? props.theme.colors.secondary : props.theme.colors.primary)};
	color: ${(props) => (props.$active ? "white" : props.theme.colors.fontColorLight)};
	border: 1px solid ${(props) => (props.$active ? props.theme.colors.secondary : props.theme.colors.border)};
	border-radius: 4px;
	padding: 0.3rem 0.5rem;
	cursor: pointer;
	font-size: 0.8rem;
	transition: all 0.2s ease;

	&:hover {
		background: ${(props) => (props.$active ? props.theme.colors.secondary : props.theme.colors.primary + "20")};
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const SkillsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const SkillItem = styled.div<{ $trained: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3rem 0.5rem;
	border-radius: 4px;
	background: ${(props) => (props.$trained ? props.theme.colors.primary + "20" : "transparent")};
	color: ${(props) => (props.$trained ? props.theme.colors.fontColorLight : props.theme.colors.fontColorDark)};
	font-weight: ${(props) => (props.$trained ? "bold" : "normal")};
`;

export const SkillName = styled.span`
	font-size: 0.9rem;
	text-transform: capitalize;
`;

export const SkillBonus = styled.span<{ $trained?: boolean }>`
	font-size: 0.8rem;
	background: ${(props) =>
		props.$trained ? props.theme.colors.secondaryDark : props.theme.colors.primaryDark || "#666"};
	color: ${(props) => (props.$trained ? "white" : props.theme.colors.fontColorStandart)};
	padding: 0.1rem 0.4rem;
	border-radius: 12px;
	min-width: 20px;
	text-align: center;
	font-weight: ${(props) => (props.$trained ? "bold" : "normal")};
`;

export const LoadingMessage = styled.div`
	text-align: center;
	color: ${(props) => props.theme.colors.secondaryText};
	font-size: 1.1rem;
	padding: 2rem;
`;

export const ErrorMessage = styled.div`
	text-align: center;
	color: ${(props) => props.theme.colors.error || "#e74c3c"};
	font-size: 1.1rem;
	padding: 2rem;
	background: ${(props) => props.theme.colors.errorBackground || "rgba(231, 76, 60, 0.1)"};
	border-radius: 8px;
`;

export const CreatureHeader = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 2rem;
	align-items: flex-start;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const CreatureImageContainer = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 12px;
	overflow: hidden;
	flex-shrink: 0;
	background: ${(props) => props.theme.colors.cardBackground};
	border: 2px solid ${(props) => props.theme.colors.border};
`;

export const CreatureImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const CreatureBasicInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const CreatureName = styled.h1`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	margin: 0;
	font-size: 2.5rem;
	font-weight: bold;
`;

export const CreatureNameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	flex-wrap: wrap;
`;

export const CreatureAnimaSymbols = styled.span`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: bold;
	opacity: 0.9;
`;

export const CreatureTypeInfo = styled.h2`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	margin: 0;
	font-size: 1.2rem;
	font-style: italic;
	font-weight: normal;
`;

export const CreatureClassification = styled.span`
	display: inline-block;
	background: ${(props) => props.theme.colors.primary};
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 1rem;
	font-weight: bold;
	width: fit-content;
`;

export const CreatureLevel = styled.span`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1.1rem;
	font-weight: bold;
`;

export const CreatureDescription = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 1.1rem;
	line-height: 1.6;
	margin-bottom: 2rem;
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	padding: 1rem;
	border-radius: 8px;
	border-left: 4px solid ${(props) => props.theme.colors.primary};
`;

export const SectionTitle = styled.h3`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: 1.5rem;
	border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const StatsSection = styled.div`
	margin-bottom: 2rem;
`;

export const AttributesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	gap: 1rem;
`;

export const AttributeItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	padding: 0.75rem;
	border-radius: 6px;
	border: 1px solid ${(props) => props.theme.colors.border};
`;

export const AttributeLabel = styled.span`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-weight: bold;
	font-size: 0.9rem;
`;

export const AttributeValue = styled.span`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-weight: bold;
	font-size: 1.1rem;
`;

export const ResourcesSection = styled.div`
	margin-bottom: 2rem;
`;

export const ResourcesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
`;

export const ResourceItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	padding: 1rem;
	border-radius: 6px;
	border: 1px solid ${(props) => props.theme.colors.border};
`;

export const ResourceLabel = styled.span`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-weight: bold;
`;

export const ResourceValue = styled.span`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-weight: bold;
	font-size: 1.2rem;
`;

export const AbilitiesSection = styled.div`
	margin-bottom: 2rem;
`;

export const AbilitiesList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const AbilityItem = styled.div`
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	border-radius: 8px;
	padding: 1rem;
	border-left: 4px solid ${(props) => props.theme.colors.secondary};
`;

export const AbilityHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
`;

export const AbilityName = styled.h4`
	margin: 0;
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-size: 1.1rem;
`;

export const AbilityType = styled.span`
	background: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.fontColorDark};
	padding: 0.2rem 0.5rem;
	border-radius: 12px;
	font-size: 0.8rem;
	font-weight: bold;
`;

export const AbilityDescription = styled.p`
	margin: 0;
	color: ${(props) => props.theme.colors.text};
	line-height: 1.5;
`;

export const ActionsSection = styled.div`
	margin-bottom: 2rem;
`;

export const ReactionsSection = styled.div`
	margin-bottom: 2rem;
`;

export const LegendarySection = styled.div`
	margin-bottom: 2rem;
`;

export const ActionItem = styled.div`
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 8px;
	padding: 1rem;
	margin-bottom: 1rem;
`;

export const ActionHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
`;

export const ActionName = styled.h4`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	margin: 0;
	font-size: 1.2rem;
`;

export const ActionType = styled.span`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-style: italic;
	font-size: 0.9rem;
`;

export const ActionDescription = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	margin: 0 0 0.5rem 0;
	line-height: 1.5;
`;

export const ActionEffects = styled.div`
	margin-bottom: 0.5rem;
`;

export const EffectItem = styled.div`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 0.95rem;
	margin-bottom: 0.25rem;
`;

export const ActionCosts = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
`;

export const CostItem = styled.span`
	background: ${(props) => props.theme.colors.primary};
	color: white;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: bold;
`;

export const SpellsSection = styled.div`
	margin-bottom: 2rem;
`;

export const SpellItem = styled.div`
	background: ${(props) => props.theme.colors.cardSecondaryBackground};
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 8px;
	padding: 1rem;
	margin-bottom: 1rem;
`;

export const SpellHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
`;

export const SpellName = styled.h4`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.heading};
	margin: 0;
	font-size: 1.1rem;
`;

export const SpellCircle = styled.span`
	background: ${(props) => props.theme.colors.accent};
	color: white;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: bold;
`;

export const SpellInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 0.5rem;
	margin-bottom: 0.5rem;
`;

export const SpellDetail = styled.span`
	color: ${(props) => props.theme.colors.fontColorSecondary};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: 0.9rem;
`;

export const SpellDescription = styled.p`
	color: ${(props) => props.theme.colors.fontColorStandart};
	font-family: ${(props) => props.theme.fonts.body};
	margin: 0;
	line-height: 1.5;
`;
