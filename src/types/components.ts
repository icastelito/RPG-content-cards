import { Magia, SpellProps } from "./spell";
import { ItensProps } from "./item";
import { menuNavigationProps } from "./navigation";

export interface MagiaShowcaseProps {
	magiasList: Magia[];
}

export interface ItensShowcaseProps {
	itensList: ItensProps[];
}

export interface SpellShowcaseProps {
	spellsList: SpellProps[];
}

export interface HeaderMenuProps {
	navigationItems: menuNavigationProps[];
}

export interface SpellFiltersProps {
	searchTerm: string;
	onSearchChange: (value: string) => void;
	selectedCirculo: string;
	onCirculoChange: (value: string) => void;
	selectedCusto: string;
	onCustoChange: (value: string) => void;
	selectedNatureza: string;
	onNaturezaChange: (value: string) => void;
	selectedConspecto: string;
	onConspectoChange: (value: string) => void;
	onClearFilters: () => void;
}

export interface RenderIconProps {
	iconName: string;
	iconSize?: number;
}

export interface IconMapper {
	[key: string]: React.ComponentType<any>;
}
