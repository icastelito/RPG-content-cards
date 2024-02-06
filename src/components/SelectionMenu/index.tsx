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
    <S.Rowler>
      {navigationItems.slice(1).map((item) => (
        <div key={item.name}>
          <S.ContentButtom onClick={() => handleCardClick(item.path)}>
            <RenderIcon iconName={item.icon} />
            {item.name}
          </S.ContentButtom>
        </div>
      ))}
    </S.Rowler>
  );
};

export default SelectionMenuNavigation;
