export interface menuNavigationProps {
    name: string;
    path: string;
    iconName: string;
    iconSize: number;
    iconColor: string;
    
  }

export const  menuNavigation: menuNavigationProps[] = [
    { name: 'Home', path: '/home', iconName: 'home', iconSize: 50, iconColor: 'white'},
    { name: 'Magias', path: '/spells', iconName: 'GiSpellBook', iconSize: 50, iconColor: 'white'},
    { name: 'Itens', path: '/itens', iconName: 'GiWingedSword', iconSize: 50, iconColor: 'white'},
    { name: 'Monstros', path: '/monstros', iconName: 'GiBatwingEmblem', iconSize: 50, iconColor: 'white'},
    //{ name: 'Personagens', path: '/personagens', icon: 'user', iconSize: 50},
    //{ name: 'Configurações', path: '/configuracoes', icon: 'cog', iconSize: 50},
];
