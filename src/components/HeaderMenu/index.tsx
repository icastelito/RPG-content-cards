// import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";
import * as S from "./styles";

export interface HeaderMenuNavigationProps {
  name: string;
  path: string;
  icon: string;
}

interface HeaderMenuProps {
  navigationItems: HeaderMenuNavigationProps[];
}



const HeaderMenuNavigation: React.FC<HeaderMenuProps> = ({navigationItems}) => (
    
  <S.Navibar>
      {navigationItems.map((item) => (
        <S.Listed key={item.name} href={item.path}> {item.name} </S.Listed>
      ))}
  </S.Navibar>
);

export default HeaderMenuNavigation;
