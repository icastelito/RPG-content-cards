export interface HabilitiesProps {
	id: number;
	name: string;
	description: string;
	passive: boolean; // Indica se é uma habilidade passiva
	type: string; // ex: "Ataque", "Habilidade", "Magia"
	effects: string[]; // Efeitos da ação
	manaCost?: number; // Custo em PM
	stressCost?: number; // Custo em SP
	otherCosts?: string[]; // Outros custos, se houver
}
export interface LegendaryHabilities extends HabilitiesProps {
	legendaryPointsCost: number; // Custo em pontos lendários
}
export interface Habilities extends HabilitiesProps {
	// Ações comuns, herda de HabilitiesProps apenas e é mantida separada para fins de organização e distinção
}
