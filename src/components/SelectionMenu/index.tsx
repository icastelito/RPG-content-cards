// import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";
import * as S from "./styles";
import { menuNavigationProps } from "../../utils";
import RenderIcon from "../IconRender";


interface HeaderMenuProps {
  navigationItems:  menuNavigationProps[];
}



const SelectionMenuNavigation: React.FC<HeaderMenuProps> = ({navigationItems}) => (
  <S.Card>
    {navigationItems.slice(1).map((item) => (
      <div key={item.name}>
        <S.CardContent href={item.path}> 
          {item.name}

        <RenderIcon iconName={item.icon} />


        </S.CardContent>
      </div>
    ))}
  </S.Card>
);

export default SelectionMenuNavigation;
