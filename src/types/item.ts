export interface ItensProps {
	id: number;
	name: string;
	attunement?: boolean;
	type: string;
	subtype?: string;
	rarity: string;
	animaIdentity: string[];
	description: string[];
	price?: number;
	magic?: boolean;
	magicalEffects?: string[];
}

export interface Armor extends ItensProps {
	damageMitigationMinor?: number;
	damageMitigationMajor?: number;
	effects?: string[];
	category: string;
	armorPoints?: number;
}

export interface Weapon extends ItensProps {
	damage?: string;
	damageType?: string;
	category?: string;
	properties?: string[];
	range?: string;
	weight?: number;
	attackAttribute: string;
	targetSkill?: string;
}

export interface Consumable extends ItensProps {
	effects?: string[];
	consumableType: string; // Ex: Poção, Elixir, etc.
	duration?: string; // Duração do efeito
	uses?: number; // Quantidade de usos restantes
}

// Interface para itens do sistema JSON local
export interface LocalItensProps {
	id: number;
	nome: string;
	tipo: string;
	preco: number;
	dano?: string;
	categoria: string;
	propriedades?: string[];
	descricao: string;
}
