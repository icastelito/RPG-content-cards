import * as S from "./styles";
import { HeaderMenuProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import RenderIcon from "../IconRender";

const HeaderMenuNavigation: React.FC<HeaderMenuProps> = ({ navigationItems }) => {
	const navigate = useNavigate();
	const { toggleTheme, iconName } = useTheme();

	const handleCardClick = (way: string) => {
		navigate(way);
	};

	return (
		<S.Navbar>
			<S.ThemeToggle onClick={toggleTheme}>
				<RenderIcon iconName={iconName} />
			</S.ThemeToggle>
			<S.NavItems>
				{navigationItems.map((item) => (
					<S.Listed key={item.name} onClick={() => handleCardClick(item.path)}>
						{item.name}
					</S.Listed>
				))}
			</S.NavItems>
		</S.Navbar>
	);
};

export default HeaderMenuNavigation;
