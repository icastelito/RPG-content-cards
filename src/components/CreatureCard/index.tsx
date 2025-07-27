import { CreatureCardProps } from "../../types";
import { useCreatureDetails } from "../../hooks/useCreatureDetails";
import * as S from "./styles";
import { useState } from "react";
import IconRender from "../IconRender";

type SortType = "alphabetical" | "attribute" | "trained";

const CreatureCard: React.FC<CreatureCardProps> = ({ creature }) => {
	const { creature: detailedCreature, loading, error } = useCreatureDetails(creature.id);
	const [sortType, setSortType] = useState<SortType>("alphabetical");

	// Mapeamento das perícias para seus atributos correspondentes
	const skillToAttribute: { [key: string]: string } = {
		// Inteligência
		história: "intelligence",
		ocultismo: "intelligence",
		nobreza: "intelligence",
		religião: "intelligence",
		guerra: "intelligence",
		arcanismo: "intelligence",
		medicina: "intelligence",
		biologia: "intelligence",
		tecnologia: "intelligence",
		investigação: "intelligence",

		// Sabedoria
		intuição: "wisdom",
		percepção: "wisdom",
		sobrevivência: "wisdom",
		natureza: "wisdom",
		vontade: "wisdom",
		sacerdocio: "wisdom",
		misticismo: "wisdom",
		curanderia: "wisdom",

		// Força
		atletismo: "streng",
		fortitude: "streng",
		ameaça: "streng",
		demolição: "streng",

		// Agilidade
		acrobacia: "agility",
		furtividade: "agility",
		pilotagem: "agility",
		reflexos: "agility",

		// Precisão
		manuseio: "precision",
		crime: "precision", // Ladinagem
		pontaria: "precision",
		desarme: "precision",

		// Carisma
		charme: "charisma",
		diplomacia: "charisma",
		enganação: "charisma",
		atuação: "charisma",
		intimidação: "charisma",
		presença: "charisma",
	};

	// Mapeamento dos atributos para suas abreviações em português
	const attributeAbbreviations: { [key: string]: string } = {
		intelligence: "INT",
		wisdom: "SAB",
		streng: "FOR",
		agility: "AGI",
		precision: "PRE",
		charisma: "CAR",
	};

	// Função para calcular o bônus de perícia baseado no atributo correspondente
	const calculateSkillBonus = (skillName: string, trained: boolean) => {
		if (!detailedCreature) return 0;

		// Busca o atributo correspondente à perícia
		const attributeName = skillToAttribute[skillName.toLowerCase()];
		if (!attributeName) return 0;

		// Calcula o modificador do atributo [(atributo - 10) / 2]
		let attributeValue = 10; // valor padrão

		switch (attributeName) {
			case "intelligence":
				attributeValue = detailedCreature.intelligence;
				break;
			case "wisdom":
				attributeValue = detailedCreature.wisdom;
				break;
			case "streng":
				attributeValue = detailedCreature.streng;
				break;
			case "agility":
				attributeValue = detailedCreature.agility;
				break;
			case "precision":
				attributeValue = detailedCreature.precision;
				break;
			case "charisma":
				attributeValue = detailedCreature.charisma;
				break;
		}

		const attributeModifier = Math.floor((attributeValue - 10) / 2);

		// Bônus base pelo nível (level / 5 arredondado para baixo) - apenas se treinado
		const levelBonus = trained ? Math.floor(detailedCreature.level / 5) : 0;

		// Retorna o modificador do atributo + bônus de nível (se treinado)
		return attributeModifier + levelBonus;
	};

	// Função para ordenar as perícias
	const sortSkills = (skillsEntries: [string, boolean][]) => {
		switch (sortType) {
			case "alphabetical":
				return skillsEntries.sort(([a], [b]) => a.localeCompare(b));

			case "attribute":
				return skillsEntries.sort(([a], [b]) => {
					const attrA = skillToAttribute[a.toLowerCase()] || "";
					const attrB = skillToAttribute[b.toLowerCase()] || "";
					const abbrevA = attributeAbbreviations[attrA] || "";
					const abbrevB = attributeAbbreviations[attrB] || "";
					return abbrevA.localeCompare(abbrevB) || a.localeCompare(b);
				});

			case "trained":
				return skillsEntries.sort(([a, trainedA], [b, trainedB]) => {
					// Primeiro por treinamento (treinadas primeiro), depois alfabético
					if (trainedA === trainedB) {
						return a.localeCompare(b);
					}
					return trainedB ? 1 : -1;
				});

			default:
				return skillsEntries;
		}
	};

	// Função para renderizar as perícias
	const renderSkills = () => {
		if (!detailedCreature?.skills) return null;

		const skillsEntries = Object.entries(detailedCreature.skills);
		const sortedSkills = sortSkills(skillsEntries);

		return (
			<S.SkillsSection>
				<S.SkillsHeader>
					<S.SectionTitle>Perícias</S.SectionTitle>
					<S.SortButtons>
						<S.SortButton
							$active={sortType === "alphabetical"}
							onClick={() => setSortType("alphabetical")}
							title="Ordenar por ordem alfabética"
						>
							<IconRender iconName="FaSortAlphaDown" iconSize={14} />
						</S.SortButton>
						<S.SortButton
							$active={sortType === "attribute"}
							onClick={() => setSortType("attribute")}
							title="Ordenar por atributo"
						>
							<IconRender iconName="MdBarChart" iconSize={14} />
						</S.SortButton>
						<S.SortButton
							$active={sortType === "trained"}
							onClick={() => setSortType("trained")}
							title="Perícias treinadas primeiro"
						>
							<IconRender iconName="FaStar" iconSize={14} />
						</S.SortButton>
					</S.SortButtons>
				</S.SkillsHeader>
				<S.SkillsList>
					{sortedSkills.map(([skillName, trained]) => {
						const bonus = calculateSkillBonus(skillName, trained);
						const bonusDisplay = bonus >= 0 ? `+${bonus}` : `${bonus}`;
						const attributeName = skillToAttribute[skillName.toLowerCase()];
						const attributeAbbrev = attributeAbbreviations[attributeName] || "???";

						return (
							<S.SkillItem key={skillName} $trained={trained}>
								<S.SkillName>
									{skillName} ({attributeAbbrev})
								</S.SkillName>
								<S.SkillBonus $trained={trained}>{bonusDisplay}</S.SkillBonus>
							</S.SkillItem>
						);
					})}
				</S.SkillsList>
			</S.SkillsSection>
		);
	};

	if (loading) {
		return (
			<S.CreatureCard>
				<S.LoadingMessage>Carregando detalhes da criatura...</S.LoadingMessage>
			</S.CreatureCard>
		);
	}

	if (error || !detailedCreature) {
		return (
			<S.CreatureCard>
				<S.ErrorMessage>Erro ao carregar criatura: {error}</S.ErrorMessage>
			</S.CreatureCard>
		);
	}

	return (
		<S.CreatureLayout>
			{/* Skills Column */}
			<S.SkillsColumn>{renderSkills()}</S.SkillsColumn>

			{/* Main Content */}
			<S.MainContent>
				<S.CreatureCard>
					<S.CreatureHeader>
						<S.CreatureImageContainer>
							{detailedCreature.image && (
								<S.CreatureImage src={detailedCreature.image} alt={detailedCreature.name} />
							)}
						</S.CreatureImageContainer>

						<S.CreatureBasicInfo>
							<S.CreatureName>{detailedCreature.name}</S.CreatureName>
							<S.CreatureTypeInfo>
								{detailedCreature.type} {detailedCreature.size}
								{detailedCreature.subtype && ` (${detailedCreature.subtype})`}
							</S.CreatureTypeInfo>
							<S.CreatureClassification>{detailedCreature.classification}</S.CreatureClassification>
							<S.CreatureLevel>Nível {detailedCreature.level}</S.CreatureLevel>
						</S.CreatureBasicInfo>
					</S.CreatureHeader>

					<S.CreatureDescription>{detailedCreature.description}</S.CreatureDescription>

					<S.StatsSection>
						<S.SectionTitle>Atributos</S.SectionTitle>
						<S.AttributesGrid>
							<S.AttributeItem>
								<S.AttributeLabel>FOR:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.streng} ({Math.floor((detailedCreature.streng - 10) / 2)})
								</S.AttributeValue>
							</S.AttributeItem>
							<S.AttributeItem>
								<S.AttributeLabel>DES:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.precision} ({Math.floor((detailedCreature.precision - 10) / 2)}){" "}
								</S.AttributeValue>
							</S.AttributeItem>
							<S.AttributeItem>
								<S.AttributeLabel>AGI:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.agility} ({Math.floor((detailedCreature.agility - 10) / 2)})
								</S.AttributeValue>
							</S.AttributeItem>
							<S.AttributeItem>
								<S.AttributeLabel>INT:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.intelligence} (
									{Math.floor((detailedCreature.intelligence - 10) / 2)})
								</S.AttributeValue>
							</S.AttributeItem>
							<S.AttributeItem>
								<S.AttributeLabel>SAB:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.wisdom} ({Math.floor((detailedCreature.wisdom - 10) / 2)})
								</S.AttributeValue>
							</S.AttributeItem>
							<S.AttributeItem>
								<S.AttributeLabel>CAR:</S.AttributeLabel>
								<S.AttributeValue>
									{detailedCreature.charisma} ({Math.floor((detailedCreature.charisma - 10) / 2)})
								</S.AttributeValue>
							</S.AttributeItem>
						</S.AttributesGrid>
					</S.StatsSection>

					<S.ResourcesSection>
						<S.SectionTitle>Recursos</S.SectionTitle>
						<S.ResourcesGrid>
							<S.ResourceItem>
								<S.ResourceLabel>Pontos de Vida:</S.ResourceLabel>
								<S.ResourceValue>
									{Math.floor(
										detailedCreature.hp +
											(detailedCreature.streng - 10) / 2 +
											(detailedCreature.agility - 10) / 2 +
											(detailedCreature.precision - 10) / 2
									)}
								</S.ResourceValue>
							</S.ResourceItem>
							<S.ResourceItem>
								<S.ResourceLabel>Pontos de Mana:</S.ResourceLabel>
								<S.ResourceValue>
									{Math.floor(
										detailedCreature.mp +
											(detailedCreature.intelligence - 10) / 2 +
											(detailedCreature.wisdom - 10) / 2 +
											(detailedCreature.charisma - 10) / 2
									)}
								</S.ResourceValue>
							</S.ResourceItem>
							<S.ResourceItem>
								<S.ResourceLabel>Pontos de Stress:</S.ResourceLabel>
								<S.ResourceValue>
									{Math.floor(
										detailedCreature.sp +
											(detailedCreature.intelligence - 10) / 2 +
											(detailedCreature.wisdom - 10) / 2 +
											(detailedCreature.charisma - 10) / 2 +
											(detailedCreature.streng - 10) / 2 +
											(detailedCreature.agility - 10) / 2 +
											(detailedCreature.precision - 10) / 2 +
											detailedCreature.level / 5
									)}
								</S.ResourceValue>
							</S.ResourceItem>
						</S.ResourcesGrid>
					</S.ResourcesSection>

					{detailedCreature.resolvedAbilities && detailedCreature.resolvedAbilities.length > 0 && (
						<S.AbilitiesSection>
							<S.SectionTitle>Habilidades</S.SectionTitle>
							<S.AbilitiesList>
								{detailedCreature.resolvedAbilities.map((ability) => (
									<S.AbilityItem key={ability.id}>
										<S.AbilityHeader>
											<S.AbilityName>{ability.name}</S.AbilityName>
											<S.AbilityType>({ability.type})</S.AbilityType>
										</S.AbilityHeader>
										<S.AbilityDescription>{ability.description}</S.AbilityDescription>
									</S.AbilityItem>
								))}
							</S.AbilitiesList>
						</S.AbilitiesSection>
					)}

					{detailedCreature.resolvedActions && detailedCreature.resolvedActions.length > 0 && (
						<S.ActionsSection>
							<S.SectionTitle>Ações</S.SectionTitle>
							{detailedCreature.resolvedActions.map((action) => (
								<S.ActionItem key={action.id}>
									<S.ActionHeader>
										<S.ActionName>{action.name}</S.ActionName>
										<S.ActionType>({action.type})</S.ActionType>
									</S.ActionHeader>
									<S.ActionDescription>{action.description}</S.ActionDescription>
									{action.effects && action.effects.length > 0 && (
										<S.ActionEffects>
											{action.effects.map((effect, index) => (
												<S.EffectItem key={index}>• {effect}</S.EffectItem>
											))}
										</S.ActionEffects>
									)}
									{(action.manaCost || action.stressCost || action.otherCosts) && (
										<S.ActionCosts>
											{action.manaCost && <S.CostItem>PM: {action.manaCost}</S.CostItem>}
											{action.stressCost && <S.CostItem>SP: {action.stressCost}</S.CostItem>}
											{action.otherCosts &&
												action.otherCosts.map((cost, index) => (
													<S.CostItem key={index}>{cost}</S.CostItem>
												))}
										</S.ActionCosts>
									)}
								</S.ActionItem>
							))}
						</S.ActionsSection>
					)}

					{detailedCreature.resolvedReactions && detailedCreature.resolvedReactions.length > 0 && (
						<S.ReactionsSection>
							<S.SectionTitle>Reações</S.SectionTitle>
							{detailedCreature.resolvedReactions.map((reaction) => (
								<S.ActionItem key={reaction.id}>
									<S.ActionHeader>
										<S.ActionName>{reaction.name}</S.ActionName>
										<S.ActionType>({reaction.type})</S.ActionType>
									</S.ActionHeader>
									<S.ActionDescription>{reaction.description}</S.ActionDescription>
									{reaction.effects && reaction.effects.length > 0 && (
										<S.ActionEffects>
											{reaction.effects.map((effect, effectIndex) => (
												<S.EffectItem key={effectIndex}>• {effect}</S.EffectItem>
											))}
										</S.ActionEffects>
									)}
								</S.ActionItem>
							))}
						</S.ReactionsSection>
					)}

					{detailedCreature.resolvedLegendaryActions &&
						detailedCreature.resolvedLegendaryActions.length > 0 && (
							<S.LegendarySection>
								<S.SectionTitle>Ações Lendárias</S.SectionTitle>
								{detailedCreature.resolvedLegendaryActions.map((action) => (
									<S.ActionItem key={action.id}>
										<S.ActionHeader>
											<S.ActionName>{action.name}</S.ActionName>
											<S.ActionType>(Ação Lendária)</S.ActionType>
										</S.ActionHeader>
										<S.ActionDescription>{action.description}</S.ActionDescription>
										{action.effects && action.effects.length > 0 && (
											<S.ActionEffects>
												{action.effects.map((effect, effectIndex) => (
													<S.EffectItem key={effectIndex}>• {effect}</S.EffectItem>
												))}
											</S.ActionEffects>
										)}
									</S.ActionItem>
								))}
							</S.LegendarySection>
						)}

					{detailedCreature.resolvedSpells && detailedCreature.resolvedSpells.length > 0 && (
						<S.SpellsSection>
							<S.SectionTitle>Magias</S.SectionTitle>
							{detailedCreature.resolvedSpells.map((spell) => (
								<S.SpellItem key={spell.id}>
									<S.SpellHeader>
										<S.SpellName>{spell.nome}</S.SpellName>
										<S.SpellCircle>Círculo {spell.circulo}</S.SpellCircle>
									</S.SpellHeader>
									<S.SpellInfo>
										<S.SpellDetail>
											<strong>Custo:</strong> {spell.custoPM} PM
										</S.SpellDetail>
										<S.SpellDetail>
											<strong>Alvo:</strong> {spell.alvo}
										</S.SpellDetail>
										<S.SpellDetail>
											<strong>Alcance:</strong> {spell.alcance}
										</S.SpellDetail>
										<S.SpellDetail>
											<strong>Duração:</strong> {spell.duracao}
										</S.SpellDetail>
									</S.SpellInfo>
									<S.SpellDescription>{spell.descricao}</S.SpellDescription>
								</S.SpellItem>
							))}
						</S.SpellsSection>
					)}

					{detailedCreature.animaIdentity && detailedCreature.animaIdentity.length > 0 && (
						<S.AnimaSection>
							<S.SectionTitle>Identidade Anima</S.SectionTitle>
							<S.AnimaList>
								{detailedCreature.animaIdentity.map((identity, index) => (
									<S.AnimaItem key={index}>{identity}</S.AnimaItem>
								))}
							</S.AnimaList>
						</S.AnimaSection>
					)}
				</S.CreatureCard>
			</S.MainContent>

			{/* Equipment Column - Placeholder for future implementation */}
			<div style={{ width: "250px" }}>{/* Equipment will be added here later */}</div>
		</S.CreatureLayout>
	);
};

export default CreatureCard;
