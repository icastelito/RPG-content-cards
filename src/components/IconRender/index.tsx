import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import { RenderIconProps, IconMapper } from "../../types";

const iconMapper: IconMapper = {
	FaBeer: FaIcons.FaBeer,
	FaCoffee: FaIcons.FaCoffee,
	FaMoon: FaIcons.FaMoon,
	FaSun: FaIcons.FaSun,
	GiSpellBook: GiIcons.GiSpellBook,
	GiBatwingEmblem: GiIcons.GiBatwingEmblem,
	GiWingedSword: GiIcons.GiWingedSword,
	GiScrollQuill: GiIcons.GiScrollQuill,
	// Ícones de ordenação
	FaSortAlphaDown: FaIcons.FaSortAlphaDown,
	MdBarChart: MdIcons.MdBarChart,
	FaStar: FaIcons.FaStar,
	// Ícones para página de fichas
	FaEdit: FaIcons.FaEdit,
	FaFilePdf: FaIcons.FaFilePdf,
	FaSave: FaIcons.FaSave,
	FaUndo: FaIcons.FaUndo,
	FaArrowLeft: FaIcons.FaArrowLeft,
	GiDiceTwentyFacesTwenty: GiIcons.GiDiceTwentyFacesTwenty,
};

const RenderIcon: React.FC<RenderIconProps> = ({ iconName, iconSize }) => {
	const Icon = iconMapper[iconName] || FaIcons.FaQuestion;

	return <Icon size={iconSize} />;
};

export default RenderIcon;
