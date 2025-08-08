// Tipos para a ficha de personagem
export interface CharacterSheet {
	id?: string;
	nome: string;
	classe: string;
	especializacao: string;
	nivel: number;
	povo: string;
	comunidade: string;
	skills?: Record<string, boolean>; // nome da skill -> treinado ou não
	createdAt?: Date;
	updatedAt?: Date;
}

// Props para o componente de ficha
export interface CharacterSheetProps {
	character?: CharacterSheet;
	onSave?: (character: CharacterSheet) => void;
	onExportPDF?: (character: CharacterSheet) => void;
}

// Props para campos do formulário
export interface CharacterFormFieldProps {
	label: string;
	value: string | number;
	onChange: (value: string | number) => void;
	type?: "text" | "number" | "select";
	options?: string[];
	placeholder?: string;
	required?: boolean;
}
