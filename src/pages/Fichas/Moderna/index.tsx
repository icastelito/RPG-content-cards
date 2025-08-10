import React, { useState } from "react";
import useSkills from "../../../hooks/useSkills";
import { HeaderIndex } from "../../../components/RouterRender/index";
import {
	Container,
	A4Container,
	Header,
	HeaderContent,
	ExportButton,
	ModernLayout,
	LeftPanel,
	RightPanel,
	AttributeSkillBlock,
	AttributeHeader,
	AttributeValue,
	AttributeInput,
	SkillsList,
	SkillItem,
	SkillCheckbox,
	SkillName,
	SkillInput,
	CharacterHeader,
	CharacterInfo,
	FormField,
	FormRow,
	CharacterImageContainer,
	CharacterIcon,
	FeaturesSection,
	FeatureTextarea,
	Label,
	LineFieldContainer,
	LineInput,
	LineLabel,
	PointsBoxCustom,
	PointsContent,
	PointsLeft,
	PointsRight,
	PointsRightTop,
	PointsRightBottom,
	PointsLineInput,
	PointsLineLabel,
	PointsBoxTitle,
	StatusSection,
	StatusGroup,
	StatusLabel,
	RoundCheckbox,
} from "./styles";
import * as IoIcons from "react-icons/io5";

interface CharacterData {
	name: string;
	kin: string;
	comunity: string;
	specialization: string;
	characterClass: string;
	level: number;
	trainingBonus: number;
	experience: number;
	displacement: string;
	lifePoints: number;
	tempLifePoints: number;
	maxLifePoints: number;
	manaPoints: number;
	tempManaPoints: number;
	maxManaPoints: number;
	stressPoints: number;
	tempStressPoints: number;
	maxStressPoints: number;
	sanityPoints: number;
	defense: number;
	strength: number;
	agility: number;
	intelligence: number;
	wisdom: number;
	precision: number;
	charisma: number;
	[key: string]: string | number;
}

const Moderna: React.FC = () => {
	const { skills } = useSkills();
	const [characterData, setCharacterData] = useState<CharacterData>({
		name: "",
		kin: "",
		comunity: "",
		specialization: "",
		characterClass: "",
		level: 0,
		trainingBonus: 0,
		experience: 0,
		displacement: "",
		lifePoints: 0,
		tempLifePoints: 0,
		maxLifePoints: 0,
		manaPoints: 0,
		tempManaPoints: 0,
		maxManaPoints: 0,
		stressPoints: 0,
		tempStressPoints: 0,
		maxStressPoints: 0,
		sanityPoints: 0,
		defense: 0,
		strength: 10,
		agility: 10,
		intelligence: 10,
		wisdom: 10,
		precision: 10,
		charisma: 10,
	});

	const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setCharacterData((prev) => ({
			...prev,
			[field]: event.target.value,
		}));
	};

	const handleNumberChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setCharacterData((prev) => ({
			...prev,
			[field]: Number(event.target.value) || 0,
		}));
	};

	// Função para agrupar perícias por atributo
	const groupSkillsByAttribute = () => {
		const grouped = {
			strength: skills.filter((skill) => skill.atributo === "streng"),
			agility: skills.filter((skill) => skill.atributo === "agility"),
			intelligence: skills.filter((skill) => skill.atributo === "intelligence"),
			wisdom: skills.filter((skill) => skill.atributo === "wisdom"),
			precision: skills.filter((skill) => skill.atributo === "precision"),
			charisma: skills.filter((skill) => skill.atributo === "charisma"),
		};
		return grouped;
	};

	const skillGroups = groupSkillsByAttribute();

	const AttributeBlock = ({
		attribute,
		attributeValue,
		skillList,
	}: {
		attribute: string;
		attributeValue: number;
		skillList: any[];
	}) => {
		// Mapeamento dos nomes para os campos do estado
		const attributeMapping: Record<string, string> = {
			"Força": "strength",
			"Agilidade": "agility",
			"Inteligência": "intelligence",
			"Sabedoria": "wisdom",
			"Precisão": "precision",
			"Carisma": "charisma",
		};

		const fieldName = attributeMapping[attribute] || attribute.toLowerCase();

		return (
			<AttributeSkillBlock>
				<AttributeHeader>
					{attribute.toUpperCase()}
					<AttributeValue>
						<AttributeInput type="number" value={attributeValue} onChange={handleNumberChange(fieldName)} />
						<span>({Math.floor((attributeValue - 10) / 2)})</span>
					</AttributeValue>
				</AttributeHeader>
				<SkillsList>
					{skillList.map((skill, index) => (
						<SkillItem key={index}>
							<SkillCheckbox type="checkbox" />
							<SkillName>{skill.nome}</SkillName>
							<SkillInput type="number" defaultValue={0} />
						</SkillItem>
					))}
				</SkillsList>
			</AttributeSkillBlock>
		);
	};

	return (
		<Container>
			<HeaderIndex />
			<Header>
				<HeaderContent>
					<h2>Ficha de Personagem - Layout Moderno</h2>
					<ExportButton onClick={() => window.print()}>
						<IoIcons.IoDownload /> Exportar PDF
					</ExportButton>
				</HeaderContent>
			</Header>
			<A4Container>
				<ModernLayout>
					<LeftPanel>
						<AttributeBlock
							attribute="Força"
							attributeValue={characterData.strength}
							skillList={skillGroups.strength}
						/>
						<AttributeBlock
							attribute="Agilidade"
							attributeValue={characterData.agility}
							skillList={skillGroups.agility}
						/>
						<AttributeBlock
							attribute="Precisão"
							attributeValue={characterData.precision}
							skillList={skillGroups.precision}
						/>
						<AttributeBlock
							attribute="Inteligência"
							attributeValue={characterData.intelligence}
							skillList={skillGroups.intelligence}
						/>
						<AttributeBlock
							attribute="Sabedoria"
							attributeValue={characterData.wisdom}
							skillList={skillGroups.wisdom}
						/>

						<AttributeBlock
							attribute="Carisma"
							attributeValue={characterData.charisma}
							skillList={skillGroups.charisma}
						/>
					</LeftPanel>

					<RightPanel>
						<CharacterHeader>
							<CharacterInfo>
								<div>
									<LineFieldContainer>
										<LineInput
											type="text"
											value={characterData.name}
											onChange={handleInputChange("name")}
											placeholder=""
										/>
										<LineLabel>Nome do Personagem</LineLabel>
									</LineFieldContainer>
									<FormRow>
										<LineFieldContainer>
											<LineInput
												type="text"
												value={characterData.kin}
												onChange={handleInputChange("kin")}
												placeholder=""
											/>
											<LineLabel>Povo</LineLabel>
										</LineFieldContainer>
										<LineFieldContainer>
											<LineInput
												type="text"
												value={characterData.comunity}
												onChange={handleInputChange("comunity")}
												placeholder=""
											/>
											<LineLabel>Comunidade</LineLabel>
										</LineFieldContainer>
									</FormRow>
									<FormRow>
										<LineFieldContainer>
											<LineInput
												type="text"
												value={characterData.characterClass}
												onChange={handleInputChange("characterClass")}
												placeholder=""
											/>
											<LineLabel>Classe</LineLabel>
										</LineFieldContainer>
										<LineFieldContainer>
											<LineInput
												type="text"
												value={characterData.specialization}
												onChange={handleInputChange("specialization")}
												placeholder=""
											/>
											<LineLabel>Especialização</LineLabel>
										</LineFieldContainer>
									</FormRow>
								</div>
								<div>
									<CharacterImageContainer>
										<CharacterIcon>
											<IoIcons.IoPerson />
										</CharacterIcon>
									</CharacterImageContainer>

									{/* Campos abaixo da imagem */}
									<FormRow
										style={{
											justifyContent: "space-between",
											display: "flex",
										}}
									>
										<LineFieldContainer style={{ width: "10mm" }}>
											<LineInput
												type="number"
												value={characterData.level}
												onChange={handleNumberChange("level")}
												placeholder=""
											/>
											<LineLabel>Nível</LineLabel>
										</LineFieldContainer>
										<LineFieldContainer style={{ width: "10mm" }}>
											<LineInput
												type="number"
												value={characterData.trainingBonus}
												onChange={handleNumberChange("trainingBonus")}
												placeholder=""
											/>
											<LineLabel>Bônus</LineLabel>
										</LineFieldContainer>
									</FormRow>
								</div>
							</CharacterInfo>

							{/* Caixa de Pontos de Vida */}
							<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
								<PointsBoxCustom>
									<PointsBoxTitle>Pontos de Vida</PointsBoxTitle>
									<PointsContent>
										<PointsLeft>
											<PointsLineInput
												type="number"
												value={characterData.lifePoints}
												onChange={handleNumberChange("lifePoints")}
												placeholder=""
											/>
											<PointsLineLabel>Atual</PointsLineLabel>
										</PointsLeft>
										<PointsRight>
											<PointsRightTop>
												<PointsLineInput
													type="number"
													value={characterData.tempLifePoints}
													onChange={handleNumberChange("tempLifePoints")}
													placeholder=""
												/>
												<PointsLineLabel>Temp.</PointsLineLabel>
											</PointsRightTop>
											<PointsRightBottom>
												<PointsLineInput
													type="number"
													value={characterData.maxLifePoints}
													onChange={handleNumberChange("maxLifePoints")}
													placeholder=""
												/>
												<PointsLineLabel>Máx.</PointsLineLabel>
											</PointsRightBottom>
										</PointsRight>
									</PointsContent>
								</PointsBoxCustom>

								{/* Caixa de Pontos de Mana */}
								<PointsBoxCustom>
									<PointsBoxTitle>Pontos de Mana</PointsBoxTitle>
									<PointsContent>
										<PointsLeft>
											<PointsLineInput
												type="number"
												value={characterData.manaPoints}
												onChange={handleNumberChange("manaPoints")}
												placeholder=""
											/>
											<PointsLineLabel>Atual</PointsLineLabel>
										</PointsLeft>
										<PointsRight>
											<PointsRightTop>
												<PointsLineInput
													type="number"
													value={characterData.tempManaPoints}
													onChange={handleNumberChange("tempManaPoints")}
													placeholder=""
												/>
												<PointsLineLabel>Temp.</PointsLineLabel>
											</PointsRightTop>
											<PointsRightBottom>
												<PointsLineInput
													type="number"
													value={characterData.maxManaPoints}
													onChange={handleNumberChange("maxManaPoints")}
													placeholder=""
												/>
												<PointsLineLabel>Máx.</PointsLineLabel>
											</PointsRightBottom>
										</PointsRight>
									</PointsContent>
								</PointsBoxCustom>

								{/* Caixa de Pontos de Estresse */}
								<PointsBoxCustom>
									<PointsBoxTitle>Pontos de Estresse</PointsBoxTitle>
									<PointsContent>
										<PointsLeft>
											<PointsLineInput
												type="number"
												value={characterData.stressPoints}
												onChange={handleNumberChange("stressPoints")}
												placeholder=""
											/>
											<PointsLineLabel>Atual</PointsLineLabel>
										</PointsLeft>
										<PointsRight>
											<PointsRightTop>
												<PointsLineInput
													type="number"
													value={characterData.tempStressPoints}
													onChange={handleNumberChange("tempStressPoints")}
													placeholder=""
												/>
												<PointsLineLabel>Temp.</PointsLineLabel>
											</PointsRightTop>
											<PointsRightBottom>
												<PointsLineInput
													type="number"
													value={characterData.maxStressPoints}
													onChange={handleNumberChange("maxStressPoints")}
													placeholder=""
												/>
												<PointsLineLabel>Máx.</PointsLineLabel>
											</PointsRightBottom>
										</PointsRight>
									</PointsContent>
								</PointsBoxCustom>
							</div>
						</CharacterHeader>

						<FeaturesSection>
							<FormField>
								<Label>Habilidades</Label>
								<FeatureTextarea placeholder="" style={{ height: "330px" }} />
							</FormField>
							<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
								<FormField style={{ flex: 1, marginRight: "8px" }}>
									<Label>Treinamentos</Label>
									<FeatureTextarea placeholder="" style={{ height: "220px" }} />
								</FormField>
								<FormField style={{ flex: 1, marginLeft: "8px" }}>
									<Label>Notas</Label>
									<FeatureTextarea placeholder="" style={{ height: "220px" }} />
								</FormField>
							</div>
						</FeaturesSection>
						<StatusSection>
							<StatusGroup>
								<StatusLabel>Pontos de Anima</StatusLabel>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
							</StatusGroup>
							<StatusGroup>
								<StatusLabel>Cicatrizes</StatusLabel>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
								<RoundCheckbox></RoundCheckbox>
							</StatusGroup>
						</StatusSection>
					</RightPanel>
				</ModernLayout>
			</A4Container>
		</Container>
	);
};

export default Moderna;
