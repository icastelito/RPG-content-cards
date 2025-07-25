export interface Magia {
	id?: number; // Mantendo ID para compatibilidade com o sistema atual
	nome: string;
	circulo: number;
	custoPM: number;
	alvo: string;
	alcance: string;
	duracao: string;
	componentes: string[];
	natureza: string[]; // ex: ["Divina", "Bruta"]
	conspectos: string[]; // ex: ["Vida", "Explosão"]
	descricao: string;
}

// Interface antiga mantida para compatibilidade
export interface SpellProps {
	id: number;
	name: string;
	level: number;
	conjurer?: string[];
	school: string;
	description: string[];
	castingTime: string;
	duration: string;
	range: string;
	components?: string[];
	damageResume?: string[];
	damageType?: string;
	concentration?: boolean;
	ritual?: boolean;
	reaction?: string;
}
