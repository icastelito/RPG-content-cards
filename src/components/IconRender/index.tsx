import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { IconType } from "react-icons";


interface RenderIconProps {
  iconName: string;
  iconSize?: number;
}

interface IconMapper {
  [key: string]: IconType;
}

const iconMapper: IconMapper = {
  FaBeer: FaIcons.FaBeer,
  FaCoffee: FaIcons.FaCoffee,
  FaMoon: FaIcons.FaMoon,
  FaSun: FaIcons.FaSun,
  GiSpellBook: GiIcons.GiSpellBook,
  GiBatwingEmblem: GiIcons.GiBatwingEmblem,
  GiWingedSword: GiIcons.GiWingedSword,
};

const RenderIcon: React.FC<RenderIconProps> = ({ iconName, iconSize}) => {
  const Icon = iconMapper[iconName] || FaIcons.FaQuestion;

  return (
                <Icon size={iconSize}/>
  );
};

export default RenderIcon;
