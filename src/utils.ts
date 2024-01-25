export interface menuNavigationProps {
    name: string;
    path: string;
    icon: string;
  }

export const menuNavigation: menuNavigationProps[] = [
    { name: 'Home', path: '/home', icon: 'home' },
    { name: 'Magias', path: '/spells', icon: 'spellbook' },
    { name: 'Itens', path: '/itens', icon: 'backpack' },
    //{ name: 'Monstros', path: '/monstros', icon: 'dragon' },
    //{ name: 'Personagens', path: '/personagens', icon: 'user' },
    //{ name: 'Configurações', path: '/configuracoes', icon: 'cog' },
];
