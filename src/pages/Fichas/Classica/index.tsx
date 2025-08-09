import React, { useState } from "react";
import useSkills from "../../../hooks/useSkills";
import { HeaderIndex } from "../../../components/RouterRender/index";
import {
	Container,
	A4Container,
	Header,
	HeaderContent,
	ExportButton,
	CharacterHeader,
	CharacterInfo,
	CharacterImageContainer,
	CharacterIcon,
	CharacterImage,
	OverlayFields,
	OverlayField,
	CharacterStats,
	StatBlockRow,
	StatRow,
	StatInput,
	StatBlockSide,
	StatBlockDescription,
	FormField,
	FormRow,
	SeparatorLine,
	Line,
	CharacterAbilitiesContainer,
	CharacterSkills,
	SkillsHeader,
	SortButtons,
	SortButton,
	SkillsContainer,
	Skill,
	SkillCheckbox,
	SkillTrained,
	CheckboxLabel,
	SkillName,
	SkillInput,
	WeaponsTableHeader,
	WeaponsTable,
	WeaponsThead,
	WeaponInput,
	CharacterFeatures,
	FeaturesContainer,
	FeatureSection,
	FeatureHeader,
	FeatureContent,
	FeatureTextarea,
	FeatureLeft,
	FeatureRight,
	FeatureDivider,
	FeaturesRow,
	AbilitiesHeader,
	AbilityName,
	Footer,
} from "./styles";
import * as IoIcons from "react-icons/io5";

interface CharacterData {
	name: string;
	kin: string;
	community: string;
	class: string;
	especialization: string;
	level: number;
	trainingBonus: number;
	// Atributos
	strength: number;
	agility: number;
	precision: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	// Status
	currentHealth: number;
	maxHealth: number;
	currentEnergy: number;
	maxEnergy: number;
	currentArmor: number;
	maxArmor: number;
	// Skills e seus valores de treinamento
	skillValues: Record<string, number>;
	skillTraining: Record<string, boolean>;
	// Armas
	weapons: Array<{
		name: string;
		bonus: string;
		damage: string;
		notes: string;
	}>;
	// Características e traços
	classFeatures: {
		left: string;
		right: string;
	};
	speciesTraits: string;
	talents: string;
	// Anima
	natura: string;
	intentum: string;
	egote: string;
	logos: string;
	ethos: string;
}

const FichaClassica: React.FC = () => {
	const [showingImage, setShowingImage] = useState(false);
	const [sortType, setSortType] = useState<"alphabetic" | "attribute">("attribute");

	// Hook para carregar skills do JSON
	const { skills, loading: skillsLoading, error: skillsError } = useSkills();
	const [characterData, setCharacterData] = useState<CharacterData>({
		name: "",
		kin: "",
		community: "",
		class: "",
		especialization: "",
		level: 1,
		trainingBonus: 0,
		strength: 10,
		agility: 10,
		precision: 10,
		intelligence: 10,
		wisdom: 10,
		charisma: 10,
		currentHealth: 0,
		maxHealth: 0,
		currentEnergy: 0,
		maxEnergy: 0,
		currentArmor: 0,
		maxArmor: 0,
		skillValues: {},
		skillTraining: {},
		weapons: Array(5).fill({ name: "", bonus: "", damage: "", notes: "" }),
		classFeatures: { left: "", right: "" },
		speciesTraits: "",
		talents: "",
		natura: "",
		intentum: "",
		egote: "",
		logos: "",
		ethos: "",
	});

	const toggleCharacterImage = () => {
		setShowingImage(!showingImage);
	};

	const sortSkills = (newSortType: "alphabetic" | "attribute") => {
		setSortType(newSortType);
	};

	const getSortedSkills = () => {
		if (sortType === "alphabetic") {
			return [...skills].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
		} else {
			// Ordem por atributo: FOR, AGI, PRE, INT, SAB, CAR
			const attrOrder = ["FOR", "AGI", "PRE", "INT", "SAB", "CAR"];
			return [...skills].sort((a, b) => {
				const orderA = attrOrder.indexOf(a.attributeCode);
				const orderB = attrOrder.indexOf(b.attributeCode);

				if (orderA !== orderB) {
					return orderA - orderB;
				}

				// Se mesmo atributo, ordenar alfabeticamente
				return a.nome.localeCompare(b.nome, "pt-BR");
			});
		}
	};

	const updateCharacterField = (field: keyof CharacterData, value: any) => {
		setCharacterData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const updateSkillValue = (skillName: string, value: number) => {
		setCharacterData((prev) => ({
			...prev,
			skillValues: {
				...prev.skillValues,
				[skillName]: value,
			},
		}));
	};

	const updateSkillTraining = (skillName: string, trained: boolean) => {
		setCharacterData((prev) => ({
			...prev,
			skillTraining: {
				...prev.skillTraining,
				[skillName]: trained,
			},
		}));
	};

	const updateWeapon = (index: number, field: keyof CharacterData["weapons"][0], value: string) => {
		setCharacterData((prev) => {
			const newWeapons = [...prev.weapons];
			newWeapons[index] = {
				...newWeapons[index],
				[field]: value,
			};
			return {
				...prev,
				weapons: newWeapons,
			};
		});
	};

	// Event handlers with proper types
	const handleInputChange = (field: keyof CharacterData) => (e: React.ChangeEvent<HTMLInputElement>) =>
		updateCharacterField(field, e.target.value);

	const handleNumberChange = (field: keyof CharacterData) => (e: React.ChangeEvent<HTMLInputElement>) =>
		updateCharacterField(field, parseInt(e.target.value) || 0);

	// const handleTextareaChange = (field: keyof CharacterData) => (e: React.ChangeEvent<HTMLTextAreaElement>) =>
	// 	updateCharacterField(field, e.target.value);

	// const handleSkillValueChange = (skillName: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
	// 	updateSkillValue(skillName, parseInt(e.target.value) || 0);

	// const handleSkillTrainingChange = (skillName: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
	// 	updateSkillTraining(skillName, e.target.checked);

	// const handleWeaponChange =
	// 	(index: number, field: keyof CharacterData["weapons"][0]) => (e: React.ChangeEvent<HTMLInputElement>) =>
	// 		updateWeapon(index, field, e.target.value);

	const exportToPDF = () => {
		console.log("Exportar para PDF:", characterData);
	};

	return (
		<>
			<HeaderIndex />
			<Container>
				<Header>
					<HeaderContent>
						<h1 className="philosopher-bold">Ficha de Personagem - Astra</h1>
						<ExportButton onClick={exportToPDF}>
							<IoIcons.IoDownloadOutline />
							Exportar PDF
						</ExportButton>
					</HeaderContent>
				</Header>

				<A4Container>
					<CharacterHeader>
						<CharacterInfo>
							<FormField>
								<input
									type="text"
									value={characterData.name}
									onChange={handleInputChange("name")}
									required
								/>
								<label>Nome</label>
							</FormField>

							<FormRow>
								<FormField>
									<input
										type="text"
										value={characterData.kin}
										onChange={handleInputChange("kin")}
										required
									/>
									<label>Povo</label>
								</FormField>
								<FormField>
									<input
										type="text"
										value={characterData.community}
										onChange={handleInputChange("community")}
										required
									/>
									<label>Comunidade</label>
								</FormField>
							</FormRow>

							<FormRow>
								<FormField>
									<input
										type="text"
										value={characterData.class}
										onChange={handleInputChange("class")}
										required
									/>
									<label>Classe</label>
								</FormField>
								<FormField>
									<input
										type="text"
										value={characterData.especialization}
										onChange={handleInputChange("especialization")}
									/>
									<label>Especialização</label>
								</FormField>
							</FormRow>
						</CharacterInfo>

						<CharacterImageContainer onClick={toggleCharacterImage}>
							{!showingImage ? (
								<CharacterIcon>
									<IoIcons.IoPerson />
								</CharacterIcon>
							) : (
								<CharacterImage src="/exemple-character.jpeg" alt="Imagem do personagem" />
							)}

							<OverlayFields>
								<OverlayField className="top-left">
									<label>Bônus</label>
									<input
										type="number"
										min="0"
										max="10"
										value={characterData.trainingBonus}
										onChange={handleNumberChange("trainingBonus")}
									/>
								</OverlayField>
								<OverlayField className="bottom-right">
									<input
										type="number"
										min="1"
										max="20"
										value={characterData.level}
										onChange={handleNumberChange("level")}
									/>
									<label>Nível</label>
								</OverlayField>
							</OverlayFields>
						</CharacterImageContainer>

						<CharacterStats>
							<div>
								<StatBlockRow>
									<StatRow>
										<label>FOR</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.strength}
											onChange={handleNumberChange("strength")}
										/>
									</StatRow>
									<StatRow>
										<label>AGI</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.agility}
											onChange={handleNumberChange("agility")}
										/>
									</StatRow>
									<StatRow>
										<label>PRE</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.precision}
											onChange={handleNumberChange("precision")}
										/>
									</StatRow>
								</StatBlockRow>
								<StatBlockRow>
									<StatRow>
										<label>INT</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.intelligence}
											onChange={handleNumberChange("intelligence")}
										/>
									</StatRow>
									<StatRow>
										<label>SAB</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.wisdom}
											onChange={handleNumberChange("wisdom")}
										/>
									</StatRow>
									<StatRow>
										<label>CAR</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.charisma}
											onChange={handleNumberChange("charisma")}
										/>
									</StatRow>
								</StatBlockRow>
							</div>
							<div>
								<StatBlockSide>
									<StatBlockDescription>
										<span></span>
										<span>Atu.</span>
										<span>Máx.</span>
									</StatBlockDescription>
									<StatBlockRow>
										<label>PV</label>
										<StatInput
											type="number"
											min="0"
											max="100"
											value={characterData.currentHealth}
											onChange={handleNumberChange("currentHealth")}
										/>
										<span>/</span>
										<StatInput
											type="number"
											min="0"
											max="100"
											value={characterData.maxHealth}
											onChange={handleNumberChange("maxHealth")}
										/>
									</StatBlockRow>
									<StatBlockRow>
										<label>PM</label>
										<StatInput
											type="number"
											min="0"
											max="100"
											value={characterData.currentEnergy}
											onChange={handleNumberChange("currentEnergy")}
										/>
										<span>/</span>
										<StatInput
											type="number"
											min="0"
											max="100"
											value={characterData.maxEnergy}
											onChange={handleNumberChange("maxEnergy")}
										/>
									</StatBlockRow>
									<StatBlockRow>
										<label>PE</label>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.currentArmor}
											onChange={handleNumberChange("currentArmor")}
										/>
										<span>/</span>
										<StatInput
											type="number"
											min="0"
											max="20"
											value={characterData.maxArmor}
											onChange={handleNumberChange("maxArmor")}
										/>
									</StatBlockRow>
								</StatBlockSide>
							</div>
						</CharacterStats>
					</CharacterHeader>

					<SeparatorLine>
						<Line />
						<h5 className="philosopher-bold">Astra</h5>
						<Line />
					</SeparatorLine>

					<CharacterAbilitiesContainer>
						<CharacterSkills>
							<SkillsHeader>
								<h2>Perícias</h2>
								<SortButtons>
									<SortButton
										className={sortType === "alphabetic" ? "active" : ""}
										onClick={() => sortSkills("alphabetic")}
									>
										A-Z
									</SortButton>
									<SortButton
										className={sortType === "attribute" ? "active" : ""}
										onClick={() => sortSkills("attribute")}
									>
										Atributo
									</SortButton>
								</SortButtons>
							</SkillsHeader>
							<SkillsContainer>
								{skillsLoading ? (
									<div>Carregando skills...</div>
								) : skillsError ? (
									<div>Erro ao carregar skills: {skillsError}</div>
								) : (
									getSortedSkills().map((skill) => (
										<Skill key={skill.nome} data-attribute={skill.attributeCode}>
											<SkillCheckbox>
												<SkillTrained
													type="checkbox"
													checked={characterData.skillTraining[skill.nome] || false}
													onChange={(e) => updateSkillTraining(skill.nome, e.target.checked)}
												/>
												<CheckboxLabel />
											</SkillCheckbox>
											<SkillName>
												{skill.nome} ({skill.attributeCode})
											</SkillName>
											<SkillInput
												type="number"
												min="0"
												max="20"
												value={characterData.skillValues[skill.nome] || 0}
												onChange={(e) => updateSkillValue(skill.nome, parseInt(e.target.value))}
											/>
										</Skill>
									))
								)}
							</SkillsContainer>
						</CharacterSkills>

						<CharacterFeatures>
							<FeaturesContainer>
								<FeatureSection className="class-features">
									<WeaponsTableHeader>
										<h2>Armas & Ataques</h2>
										<WeaponsTable>
											<WeaponsThead>
												<tr>
													<th>Nome</th>
													<th>Bônus</th>
													<th>Dano</th>
													<th>Notas</th>
												</tr>
											</WeaponsThead>
											<tbody>
												{characterData.weapons.map((weapon, index) => (
													<tr key={index}>
														<td>
															<WeaponInput
																type="text"
																value={weapon.name}
																onChange={(e) =>
																	updateWeapon(index, "name", e.target.value)
																}
															/>
														</td>
														<td>
															<WeaponInput
																type="text"
																value={weapon.bonus}
																onChange={(e) =>
																	updateWeapon(index, "bonus", e.target.value)
																}
															/>
														</td>
														<td>
															<WeaponInput
																type="text"
																value={weapon.damage}
																onChange={(e) =>
																	updateWeapon(index, "damage", e.target.value)
																}
															/>
														</td>
														<td>
															<WeaponInput
																type="text"
																value={weapon.notes}
																onChange={(e) =>
																	updateWeapon(index, "notes", e.target.value)
																}
															/>
														</td>
													</tr>
												))}
											</tbody>
										</WeaponsTable>
									</WeaponsTableHeader>
									<FeatureHeader>
										<h3>CARACTERÍSTICAS DE CLASSE</h3>
									</FeatureHeader>
									<FeatureContent>
										<FeatureLeft>
											<FeatureTextarea
												placeholder="Digite as características da sua classe..."
												value={characterData.classFeatures.left}
												onChange={(e) =>
													updateCharacterField("classFeatures", {
														...characterData.classFeatures,
														left: e.target.value,
													})
												}
											/>
										</FeatureLeft>
										<FeatureDivider />
										<FeatureRight>
											<FeatureTextarea
												placeholder="Características adicionais..."
												value={characterData.classFeatures.right}
												onChange={(e) =>
													updateCharacterField("classFeatures", {
														...characterData.classFeatures,
														right: e.target.value,
													})
												}
											/>
										</FeatureRight>
									</FeatureContent>
								</FeatureSection>

								<FeaturesRow>
									<FeatureSection className="species-traits">
										<FeatureHeader>
											<h3>TRAÇO DE ESPÉCIES</h3>
										</FeatureHeader>
										<FeatureContent>
											<FeatureTextarea
												placeholder="Digite os traços da sua espécie..."
												value={characterData.speciesTraits}
												onChange={(e) => updateCharacterField("speciesTraits", e.target.value)}
											/>
										</FeatureContent>
									</FeatureSection>

									<FeatureSection className="talents">
										<FeatureHeader>
											<h3>TALENTOS</h3>
										</FeatureHeader>
										<FeatureContent>
											<FeatureTextarea
												placeholder="Digite seus talentos..."
												value={characterData.talents}
												onChange={(e) => updateCharacterField("talents", e.target.value)}
											/>
										</FeatureContent>
									</FeatureSection>
								</FeaturesRow>
							</FeaturesContainer>
						</CharacterFeatures>
					</CharacterAbilitiesContainer>
				</A4Container>

				{/* Segunda página A4 para Anima */}
				<A4Container>
					<AbilitiesHeader>
						<h2>Anima</h2>
					</AbilitiesHeader>

					<div>
						<div>
							<AbilityName>Natura</AbilityName>
							<input
								value={characterData.natura}
								onChange={(e) => updateCharacterField("natura", e.target.value)}
							/>
						</div>
						<div>
							<AbilityName>Intentum</AbilityName>
							<textarea
								value={characterData.intentum}
								onChange={(e) => updateCharacterField("intentum", e.target.value)}
							/>
						</div>
						<div>
							<AbilityName>Égote</AbilityName>
							<input
								value={characterData.egote}
								onChange={(e) => updateCharacterField("egote", e.target.value)}
							/>
						</div>
						<div>
							<AbilityName>Logos</AbilityName>
							<textarea
								value={characterData.logos}
								onChange={(e) => updateCharacterField("logos", e.target.value)}
							/>
						</div>
						<div>
							<AbilityName>Ethos</AbilityName>
							<textarea
								value={characterData.ethos}
								onChange={(e) => updateCharacterField("ethos", e.target.value)}
							/>
						</div>
					</div>
				</A4Container>

				<Footer>
					<p>&copy; 2025 Sistema Astra</p>
				</Footer>
			</Container>
		</>
	);
};

export default FichaClassica;
