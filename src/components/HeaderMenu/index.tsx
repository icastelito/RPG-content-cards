import * as S from "./styles";
import { menuNavigationProps } from "../../utils";

interface HeaderMenuProps {
  navigationItems:  menuNavigationProps[];
}



const HeaderMenuNavigation: React.FC<HeaderMenuProps> = ({navigationItems}) => (
    
  <S.Navibar>
      {navigationItems.map((item) => (
        <S.Listed key={item.name} href={item.path}> {item.name} </S.Listed>
      ))}
  </S.Navibar>
);

export default HeaderMenuNavigation;
