import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { IconType } from "react-icons";
import * as S from "./styles"

interface RenderIconProps {
  iconName: string;
}

interface IconMapper {
  [key: string]: IconType;
}

const iconMapper: IconMapper = {
  FaBeer: FaIcons.FaBeer,
  FaCoffee: FaIcons.FaCoffee,
  GiSpellBook: GiIcons.GiSpellBook,
};

const RenderIcon: React.FC<RenderIconProps> = ({ iconName }) => {
  const Icon = iconMapper[iconName] || FaIcons.FaQuestion;

  return (
        <S.StyledIcon>
                <Icon size={50}/>
        </S.StyledIcon>
  );
};

export default RenderIcon;
