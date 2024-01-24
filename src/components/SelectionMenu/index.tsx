// import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";
import * as S from "./styles";
import { menuNavigationProps } from "../../utils";
import { LogoNodejs } from 'react-ionicons'

interface HeaderMenuProps {
  navigationItems:  menuNavigationProps[];
}



const SelectionMenuNavigation: React.FC<HeaderMenuProps> = ({navigationItems}) => (
  <S.Card>
      {navigationItems.map((item) => (
        <div key={item.name}>
          <S.CardContent href={item.path}> 
          <LogoNodejs/>
            {item.name} 
          </S.CardContent>
        </div>
      ))}
  </S.Card>
);

export default SelectionMenuNavigation;
