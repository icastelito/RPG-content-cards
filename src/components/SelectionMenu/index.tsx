import * as S from "./styles";
import { menuNavigationProps } from "../../utils";
import { useNavigate } from "react-router-dom";
import RenderIcon from "../IconRender";

interface HeaderMenuProps {
  navigationItems: menuNavigationProps[];
}

const SelectionMenuNavigation: React.FC<HeaderMenuProps> = ({
  navigationItems,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (way: string) => {
    navigate(way);
  };

  return (
    <S.Card>
      {navigationItems.slice(1).map((item) => (
        <div key={item.name}>
          <S.CardContent onClick={() => handleCardClick(item.path)}>
            <RenderIcon iconName={item.icon} />
            {item.name}
          </S.CardContent>
        </div>
      ))}
    </S.Card>
  );
};

export default SelectionMenuNavigation;
