export interface ActionsProps {
	id: number;
	name: string;
	description: string;
	type: string; // ex: "Ataque", "Habilidade", "Magia"
	effects: string[]; // Efeitos da ação
	manaCost?: number; // Custo em PM
	stressCost?: number; // Custo em SP
	otherCosts?: string[]; // Outros custos, se houver
	duration?: string; // Duração da ação, se aplicável
}

export interface legendaryActions extends ActionsProps {
	legendaryPointsCost: number; // Custo em pontos lendários
}

// Ações comuns, herda de ActionProps apenas e é mantida separada para fins de organização e distinção
export interface Actions extends ActionsProps {}
