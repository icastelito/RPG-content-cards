import * as S from "./styles";
import { menuNavigationProps } from "../../utils";
import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
  navigationItems: menuNavigationProps[];
}

const HeaderMenuNavigation: React.FC<HeaderMenuProps> = ({
  navigationItems,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (way: string) => {
    navigate(way);
  };

  return (
    <S.Navibar>
      {navigationItems.map((item) => (
        <div key={item.name}>
          <S.Listed onClick={() => handleCardClick(item.path)}>
            {item.name}
          </S.Listed>
        </div>
      ))}
    </S.Navibar>
  );
};








export default HeaderMenuNavigation;
