// import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";
import * as S from "./styles";
import { menuNavigationProps } from "../../utils";

interface HeaderMenuProps {
  navigationItems:  menuNavigationProps[];
}



const SelectionMenuNavigation: React.FC<HeaderMenuProps> = ({navigationItems}) => (
    
  <S.Card>
      {navigationItems.map((item) => (
        <S.CardContent key={item.name} href={item.path}> {item.name} </S.CardContent>
      ))}
  </S.Card>
);

export default SelectionMenuNavigation;
