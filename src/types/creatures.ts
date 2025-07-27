import { Skills } from "./skills";

export interface Creature {
	id: number;
	name: string;
	description: string;
	resume: string;
	type: string;
	size: string;
	subtype?: string;
	hp: number;
	mp: number;
	sp: number;
	level: number;
	classification: string;
	abilities: number[]; // Array de IDs
	actions: number[]; // Array de IDs
	reactions: number[]; // Array de IDs
	legendaryActions?: number[]; // Array de IDs
	lairActions?: number[]; // Array de IDs
	spells?: number[]; // Array de IDs de magias
	animaIdentity?: string[];
	streng: number;
	precision: number;
	agility: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	image?: string;
	imageMini?: string;
	skills?: Skills;
}

// Interface para habilidades separadas
export interface Ability {
	id: number;
	name: string;
	description: string;
	type: string;
}
