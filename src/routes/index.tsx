// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import * as S from './styles';
import { BrowserRouter as Router, Route, Routes /*useLocation*/ } from "react-router-dom";
import InitialPage from "../pages/InitialPage/index.tsx";
import HomePage from "../pages/Home/index.tsx";
import Spells from "../pages/Spells/index.tsx";
import Itens from "../pages/Itens/index.tsx";
import Ameacas from "../pages/Ameacas/index.tsx";
import Fichas from "../pages/Fichas/index.tsx";
import FichaClassica from "../pages/Fichas/Classica/index.tsx";
import FichaModerna from "../pages/Fichas/Moderna/index.tsx";
import FichaCompleta from "../pages/Fichas/Completa/index.tsx";
import CreatureDetail from "../pages/CreatureDetail/index.tsx";
import { HeaderIndex, MainContentIndex } from "../components/RouterRender/index.tsx";

function AppRoutes() {
	// let location = useLocation();
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<InitialPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/spells" element={<Spells />} />
					<Route path="/itens" element={<Itens />} />
					<Route path="/ameacas" element={<Ameacas />} />
					<Route path="/fichas" element={<Fichas />} />
					<Route path="/fichas/Classica" element={<FichaClassica />} />
					<Route path="/fichas/Moderna" element={<FichaModerna />} />
					<Route path="/fichas/Completa" element={<FichaCompleta />} />
					<Route path="/ameacas/:id" element={<CreatureDetail />} />
					<Route
						path="/index"
						element={
							<div>
								<HeaderIndex />
								<MainContentIndex />
							</div>
						}
					/>

					{/* Add more routes as necessary */}
				</Routes>
			</Router>
		</div>
	);
}
export default AppRoutes;
