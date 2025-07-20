import { MainContentIndex, HeaderIndex } from "../../components/RouterRender/index.tsx";
import * as S from "./styles";
const HomePage = () => {
	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<MainContentIndex />
			</S.ShowcaseSection>
		</>
	);
};

export default HomePage;
