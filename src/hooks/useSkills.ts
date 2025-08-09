import { useState, useEffect } from "react";
import { dataService } from "../services/dataService";
import { SkillProps } from "../types/skills";

// Mapeamento dos nomes de atributos do JSON para as abreviações usadas na UI
const ATTRIBUTE_MAPPING: Record<string, string> = {
	streng: "FOR", // Força (strength)
	agility: "AGI", // Agilidade
	precision: "PRE", // Precisão
	intelligence: "INT", // Inteligência
	wisdom: "SAB", // Sabedoria
	charisma: "CAR", // Carisma
};

// Interface estendida para incluir o atributo mapeado
export interface MappedSkill extends SkillProps {
	attributeCode: string; // Código de atributo (FOR, AGI, etc.)
}

export const useSkills = () => {
	const [skills, setSkills] = useState<MappedSkill[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadSkills = async () => {
			setLoading(true);
			setError(null);

			try {
				const skillsData = await dataService.getSkills();

				// Mapear os skills e adicionar o código de atributo
				const mappedSkills: MappedSkill[] = skillsData.map((skill) => ({
					...skill,
					attributeCode: ATTRIBUTE_MAPPING[skill.atributo] || skill.atributo.toUpperCase(),
				}));

				console.log(`Carregadas ${mappedSkills.length} skills:`, mappedSkills.slice(0, 3)); // Log das primeiras 3 skills
				setSkills(mappedSkills);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Erro ao carregar skills");
				console.error("Erro ao carregar skills:", err);
			} finally {
				setLoading(false);
			}
		};

		loadSkills();
	}, []);

	// Função para buscar skills por atributo (usando código)
	const getSkillsByAttribute = (attributeCode: string): MappedSkill[] => {
		return skills.filter((skill) => skill.attributeCode === attributeCode);
	};

	// Função para buscar uma skill por nome
	const getSkillByName = (nome: string): MappedSkill | undefined => {
		return skills.find((skill) => skill.nome.toLowerCase() === nome.toLowerCase());
	};

	return {
		skills,
		loading,
		error,
		getSkillsByAttribute,
		getSkillByName,
		attributeMapping: ATTRIBUTE_MAPPING,
	};
};

export default useSkills;
