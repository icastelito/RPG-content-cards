import React, { useState, useEffect } from "react";
import { CharacterSheet } from "../../types";
import { SkillProps } from "../../types";
import { dataService } from "../../services/dataService";
import * as S from "./styles";
import IconRender from "../IconRender";

interface CharacterFormProps {
	character?: CharacterSheet;
	onSave: (character: CharacterSheet) => void;
	onExportPDF: (character: CharacterSheet) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ character, onSave, onExportPDF }) => {
	const [formData, setFormData] = useState<CharacterSheet>({
		nome: character?.nome || "",
		classe: character?.classe || "",
		especializacao: character?.especializacao || "",
		nivel: character?.nivel || 1,
		povo: character?.povo || "",
		comunidade: character?.comunidade || "",
		skills: character?.skills || {},
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [availableSkills, setAvailableSkills] = useState<SkillProps[]>([]);

	// Carregar skills disponíveis
	useEffect(() => {
		const loadSkills = async () => {
			try {
				const skills = await dataService.getSkills();
				setAvailableSkills(skills);
			} catch (error) {
				console.error("Erro ao carregar skills:", error);
			}
		};
		loadSkills();
	}, []);

	// Opções para os campos select
	const classesOptions = ["Conjurador", "Combatente", "Inquisidor"];

	const povosOptions = ["Humano", "Alfr", "Petrician"];

	const especializacoesOptions = ["Mago", "Guerreiro", "Ladrão"];

	const comunidadesOptions = [
		"Civilizada",
		"Bárbara",
		"Nomade",
		"Isolada",
		"Cosmopolita",
		"Rural",
		"Urbana",
		"Militar",
	];

	const handleInputChange = (field: keyof CharacterSheet, value: string | number) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));

		// Limpar erro do campo quando o usuário começar a digitar
		if (errors[field]) {
			setErrors((prev) => ({
				...prev,
				[field]: "",
			}));
		}
	};

	const handleSkillChange = (skillName: string, trained: boolean) => {
		setFormData((prev) => ({
			...prev,
			skills: {
				...prev.skills,
				[skillName]: trained,
			},
		}));
	};

	const validateForm = (): boolean => {
		const newErrors: Record<string, string> = {};

		if (!formData.nome.trim()) {
			newErrors.nome = "Nome é obrigatório";
		}

		if (!formData.classe) {
			newErrors.classe = "Classe é obrigatória";
		}

		if (!formData.especializacao) {
			newErrors.especializacao = "Especialização é obrigatória";
		}

		if (formData.nivel < 1 || formData.nivel > 20) {
			newErrors.nivel = "Nível deve estar entre 1 e 20";
		}

		if (!formData.povo) {
			newErrors.povo = "Povo é obrigatório";
		}

		if (!formData.comunidade) {
			newErrors.comunidade = "Comunidade é obrigatória";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSave = () => {
		if (validateForm()) {
			onSave(formData);
		}
	};

	const handleExportPDF = () => {
		if (validateForm()) {
			onExportPDF(formData);
		}
	};

	const handleReset = () => {
		setFormData({
			nome: "",
			classe: "",
			especializacao: "",
			nivel: 1,
			povo: "",
			comunidade: "",
			skills: {},
		});
		setErrors({});
	};

	return (
		<S.FormContainer>
			<S.FormHeader>
				<S.FormTitle>Nova Ficha de Personagem</S.FormTitle>
				<S.ActionsContainer>
					<S.ActionButton onClick={handleReset} $variant="secondary">
						<IconRender iconName="FaUndo" iconSize={16} />
						Limpar
					</S.ActionButton>
					<S.ActionButton onClick={handleSave} $variant="primary">
						<IconRender iconName="FaSave" iconSize={16} />
						Salvar
					</S.ActionButton>
					<S.ActionButton onClick={handleExportPDF} $variant="success">
						<IconRender iconName="FaFilePdf" iconSize={16} />
						Exportar PDF
					</S.ActionButton>
				</S.ActionsContainer>
			</S.FormHeader>

			<S.FormGrid>
				{/* Nome */}
				<S.FormField>
					<S.FieldLabel>Nome *{errors.nome && <S.ErrorText>{errors.nome}</S.ErrorText>}</S.FieldLabel>
					<S.TextInput
						type="text"
						value={formData.nome}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("nome", e.target.value)}
						placeholder="Digite o nome do personagem"
						$hasError={!!errors.nome}
					/>
				</S.FormField>

				{/* Classe */}
				<S.FormField>
					<S.FieldLabel>Classe *{errors.classe && <S.ErrorText>{errors.classe}</S.ErrorText>}</S.FieldLabel>
					<S.SelectInput
						value={formData.classe}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							handleInputChange("classe", e.target.value)
						}
						$hasError={!!errors.classe}
					>
						<option value="">Selecione uma classe</option>
						{classesOptions.map((classe) => (
							<option key={classe} value={classe}>
								{classe}
							</option>
						))}
					</S.SelectInput>
				</S.FormField>

				{/* Especialização */}
				<S.FormField>
					<S.FieldLabel>
						Especialização *{errors.especializacao && <S.ErrorText>{errors.especializacao}</S.ErrorText>}
					</S.FieldLabel>
					<S.SelectInput
						value={formData.especializacao}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							handleInputChange("especializacao", e.target.value)
						}
						$hasError={!!errors.especializacao}
					>
						<option value="">Selecione uma especialização</option>
						{especializacoesOptions.map((especializacao) => (
							<option key={especializacao} value={especializacao}>
								{especializacao}
							</option>
						))}
					</S.SelectInput>
				</S.FormField>

				{/* Nível */}
				<S.FormField>
					<S.FieldLabel>Nível *{errors.nivel && <S.ErrorText>{errors.nivel}</S.ErrorText>}</S.FieldLabel>
					<S.NumberInput
						type="number"
						min="1"
						max="20"
						value={formData.nivel}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleInputChange("nivel", parseInt(e.target.value) || 1)
						}
						$hasError={!!errors.nivel}
					/>
				</S.FormField>

				{/* Povo */}
				<S.FormField>
					<S.FieldLabel>Povo *{errors.povo && <S.ErrorText>{errors.povo}</S.ErrorText>}</S.FieldLabel>
					<S.SelectInput
						value={formData.povo}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							handleInputChange("povo", e.target.value)
						}
						$hasError={!!errors.povo}
					>
						<option value="">Selecione um povo</option>
						{povosOptions.map((povo) => (
							<option key={povo} value={povo}>
								{povo}
							</option>
						))}
					</S.SelectInput>
				</S.FormField>

				{/* Comunidade */}
				<S.FormField>
					<S.FieldLabel>
						Comunidade *{errors.comunidade && <S.ErrorText>{errors.comunidade}</S.ErrorText>}
					</S.FieldLabel>
					<S.SelectInput
						value={formData.comunidade}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							handleInputChange("comunidade", e.target.value)
						}
						$hasError={!!errors.comunidade}
					>
						<option value="">Selecione uma comunidade</option>
						{comunidadesOptions.map((comunidade) => (
							<option key={comunidade} value={comunidade}>
								{comunidade}
							</option>
						))}
					</S.SelectInput>
				</S.FormField>
			</S.FormGrid>

			{/* Seção de Skills */}
			<S.SkillsSection>
				<S.SectionTitle>
					<IconRender iconName="GiSkills" iconSize={20} />
					Habilidades (Skills)
				</S.SectionTitle>
				<S.SkillsGrid>
					{availableSkills.map((skill) => (
						<S.SkillItem key={skill.nome}>
							<S.SkillCheckbox>
								<input
									type="checkbox"
									id={`skill-${skill.nome}`}
									checked={formData.skills?.[skill.nome] || false}
									onChange={(e) => handleSkillChange(skill.nome, e.target.checked)}
								/>
								<label htmlFor={`skill-${skill.nome}`}>
									<S.SkillName>{skill.nome}</S.SkillName>
									<S.SkillAttribute>({skill.atributo})</S.SkillAttribute>
								</label>
							</S.SkillCheckbox>
							<S.SkillDescription>{skill.descricao}</S.SkillDescription>
						</S.SkillItem>
					))}
				</S.SkillsGrid>
			</S.SkillsSection>
		</S.FormContainer>
	);
};

export default CharacterForm;
