import { Magia, SpellProps, Creature, Actions, Ability } from "../types";
import { ItensProps } from "../types";

// Base URL para os arquivos JSON locais
const BASE_URL = "/data";

export const dataService = {
	// Buscar todas as magias (nova estrutura)
	async getMagias(): Promise<Magia[]> {
		try {
			const response = await fetch(`${BASE_URL}/spells.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar magias: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar magias:", error);
			throw error;
		}
	},

	// Buscar todas as magias (mantido para compatibilidade)
	async getSpells(): Promise<SpellProps[]> {
		try {
			const response = await fetch(`${BASE_URL}/spells.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar magias: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar magias:", error);
			throw error;
		}
	},

	// Buscar magia por ID (nova estrutura)
	async getMagiaById(id: number): Promise<Magia | null> {
		try {
			const magias = await this.getMagias();
			return magias.find((magia) => magia.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar magia por ID:", error);
			throw error;
		}
	},

	// Buscar magias por círculo
	async getMagiasByCirculo(circulo: number): Promise<Magia[]> {
		try {
			const magias = await this.getMagias();
			return magias.filter((magia) => magia.circulo === circulo);
		} catch (error) {
			console.error("Erro ao buscar magias por círculo:", error);
			throw error;
		}
	},

	// Buscar magias por natureza
	async getMagiasByNatureza(natureza: string): Promise<Magia[]> {
		try {
			const magias = await this.getMagias();
			return magias.filter((magia) =>
				magia.natureza.some((nat) => nat.toLowerCase().includes(natureza.toLowerCase()))
			);
		} catch (error) {
			console.error("Erro ao buscar magias por natureza:", error);
			throw error;
		}
	},

	// Buscar magias por conspectos
	async getMagiasByConspectos(conspectos: string): Promise<Magia[]> {
		try {
			const magias = await this.getMagias();
			return magias.filter((magia) =>
				magia.conspectos.some((con) => con.toLowerCase().includes(conspectos.toLowerCase()))
			);
		} catch (error) {
			console.error("Erro ao buscar magias por conspectos:", error);
			throw error;
		}
	},

	// Buscar magia por ID (mantido para compatibilidade)
	async getSpellById(id: number): Promise<SpellProps | null> {
		try {
			const spells = await this.getSpells();
			return spells.find((spell) => spell.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar magia por ID:", error);
			throw error;
		}
	},

	// Buscar magias por escola
	async getSpellsBySchool(school: string): Promise<SpellProps[]> {
		try {
			const spells = await this.getSpells();
			return spells.filter((spell) => spell.school.toLowerCase().includes(school.toLowerCase()));
		} catch (error) {
			console.error("Erro ao buscar magias por escola:", error);
			throw error;
		}
	},

	// Buscar todos os itens
	async getItems(): Promise<ItensProps[]> {
		try {
			const response = await fetch(`${BASE_URL}/items.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar itens: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar itens:", error);
			throw error;
		}
	},

	// Buscar item por ID
	async getItemById(id: number): Promise<ItensProps | null> {
		try {
			const items = await this.getItems();
			return items.find((item) => item.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar item por ID:", error);
			throw error;
		}
	},

	// Buscar itens por tipo
	async getItemsByType(type: string): Promise<ItensProps[]> {
		try {
			const items = await this.getItems();
			return items.filter((item) => item.type.toLowerCase().includes(type.toLowerCase()));
		} catch (error) {
			console.error("Erro ao buscar itens por tipo:", error);
			throw error;
		}
	},

	// Buscar itens por raridade
	async getItemsByRarity(rarity: string): Promise<ItensProps[]> {
		try {
			const items = await this.getItems();
			return items.filter((item) => item.rarity.toLowerCase().includes(rarity.toLowerCase()));
		} catch (error) {
			console.error("Erro ao buscar itens por raridade:", error);
			throw error;
		}
	},

	// Buscar todas as criaturas
	async getCreatures(): Promise<Creature[]> {
		try {
			const response = await fetch(`${BASE_URL}/creatures.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar criaturas: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar criaturas:", error);
			throw error;
		}
	},

	// Buscar criatura por ID
	async getCreatureById(id: number): Promise<Creature | null> {
		try {
			const creatures = await this.getCreatures();
			return creatures.find((creature) => creature.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar criatura por ID:", error);
			throw error;
		}
	},

	// Buscar criaturas por tipo
	async getCreaturesByType(type: string): Promise<Creature[]> {
		try {
			const creatures = await this.getCreatures();
			return creatures.filter((creature) => creature.type.toLowerCase().includes(type.toLowerCase()));
		} catch (error) {
			console.error("Erro ao buscar criaturas por tipo:", error);
			throw error;
		}
	},

	// Buscar criaturas por classificação
	async getCreaturesByClassification(classification: string): Promise<Creature[]> {
		try {
			const creatures = await this.getCreatures();
			return creatures.filter((creature) =>
				creature.classification.toLowerCase().includes(classification.toLowerCase())
			);
		} catch (error) {
			console.error("Erro ao buscar criaturas por classificação:", error);
			throw error;
		}
	},

	// Buscar todas as actions
	async getActions(): Promise<Actions[]> {
		try {
			const response = await fetch(`${BASE_URL}/actions.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar actions: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar actions:", error);
			throw error;
		}
	},

	// Buscar action por ID
	async getActionById(id: number): Promise<Actions | null> {
		try {
			const actions = await this.getActions();
			return actions.find((action) => action.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar action por ID:", error);
			throw error;
		}
	},

	// Buscar actions por IDs (array)
	async getActionsByIds(ids: number[]): Promise<Actions[]> {
		try {
			const actions = await this.getActions();
			return actions.filter((action) => ids.includes(action.id));
		} catch (error) {
			console.error("Erro ao buscar actions por IDs:", error);
			throw error;
		}
	},

	// Buscar todas as abilities
	async getAbilities(): Promise<Ability[]> {
		try {
			const response = await fetch(`${BASE_URL}/abilities.json`);
			if (!response.ok) {
				throw new Error(`Erro ao buscar abilities: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Erro ao carregar abilities:", error);
			throw error;
		}
	},

	// Buscar ability por ID
	async getAbilityById(id: number): Promise<Ability | null> {
		try {
			const abilities = await this.getAbilities();
			return abilities.find((ability) => ability.id === id) || null;
		} catch (error) {
			console.error("Erro ao buscar ability por ID:", error);
			throw error;
		}
	},

	// Buscar abilities por IDs (array)
	async getAbilitiesByIds(ids: number[]): Promise<Ability[]> {
		try {
			const abilities = await this.getAbilities();
			return abilities.filter((ability) => ids.includes(ability.id));
		} catch (error) {
			console.error("Erro ao buscar abilities por IDs:", error);
			throw error;
		}
	},

	// Buscar magias por IDs (array)
	async getMagiasByIds(ids: number[]): Promise<Magia[]> {
		try {
			const magias = await this.getMagias();
			return magias.filter((magia) => magia.id && ids.includes(magia.id));
		} catch (error) {
			console.error("Erro ao buscar magias por IDs:", error);
			throw error;
		}
	},

	// Buscar itens por IDs (array)
	async getItemsByIds(ids: number[]): Promise<ItensProps[]> {
		try {
			const items = await this.getItems();
			return items.filter((item) => ids.includes(item.id));
		} catch (error) {
			console.error("Erro ao buscar itens por IDs:", error);
			throw error;
		}
	},
};

export default dataService;
