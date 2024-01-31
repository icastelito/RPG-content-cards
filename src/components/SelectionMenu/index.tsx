import * as S from "./styles";
import { menuNavigationProps } from "../../utils";
import { useNavigate } from "react-router-dom";

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
          <S.RouteButton onClick={() => handleCardClick(item.path)}>
            <S.CardContent>{item.name}</S.CardContent>
          </S.RouteButton>
        </div>
      ))}
    </S.Card>
  );
};

export default SelectionMenuNavigation;