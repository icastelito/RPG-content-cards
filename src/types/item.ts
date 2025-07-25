export interface ItensProps {
	id: number;
	name: string;
	attunement: boolean;
	type: string;
	subtype: string;
	rarity: string;
	powerIdentity: string[];
	description: string[];
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
