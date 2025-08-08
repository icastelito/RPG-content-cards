export interface menuNavigationProps {
	name: string;
	path: string;
	iconName: string;
	iconSize: number;
}

export const menuNavigation: menuNavigationProps[] = [
	{ name: "Home", path: "/home", iconName: "home", iconSize: 50 },
	{ name: "Magias", path: "/spells", iconName: "GiSpellBook", iconSize: 50 },
	{ name: "Itens", path: "/itens", iconName: "GiWingedSword", iconSize: 50 },
	{ name: "Ameaças", path: "/ameacas", iconName: "GiBatwingEmblem", iconSize: 50 },
	{ name: "Fichas", path: "/fichas", iconName: "GiScrollQuill", iconSize: 50 },
	//{ name: 'Personagens', path: '/personagens', icon: 'user', iconSize: 50},
	//{ name: 'Configurações', path: '/configuracoes', icon: 'cog', iconSize: 50},
];
