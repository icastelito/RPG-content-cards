export interface ItensProps {
	id: number;
	name: string; // Nome do item
	attunement?: boolean; // Requer sintonização
	type: string; // Tipo do item
	subtype?: string; // Subtipo do item
	rarity: string; // Raridade do item
	animaIdentity?: string[]; // Identidade da anima do item (Natura, Intentum, Égote, Logos e Ethos)
	description: string[]; // Descrição do item
	price?: number; // Preço do item
	magic?: boolean; // Item mágico
	magicalEffects?: string[]; // Efeitos mágicos do item
	properties?: string[]; // Propriedades do item
	imagePath?: string; // Caminho da imagem do item
}

export interface Armor extends ItensProps {
	damageThreshold1: number;
	damageThreshold2: number;
	category: string;
	armorHitPoints: number; // Quantidade de dano que a armadura pode absorver para diminuir o dano do ataque e encaixar dentro de um limiar
}

export interface Weapon extends ItensProps {
	baseDamage: string;
	damageType: string;
	category: string;
	affinities: WeaponAffinity[];
	range?: string;
	maxRange?: string;
	weight?: number;
}

export interface WeaponAffinity {
	atributo: string; // Atributo de afinidade (For, Des, Con, Int, Sab, Car)
	escala: string; // escala de afinidade (S..E)
}

export interface Consumable extends ItensProps {
	effects?: string[];
	consumableType: string; // Ex: Poção, Elixir, etc.
	duration?: string; // Duração do efeito
	uses?: number; // Quantidade de usos restantes
}

// Outros itens como pedras, aneis, amuletos
export interface Equipment extends ItensProps {}

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
