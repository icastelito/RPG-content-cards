// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import * as S from './styles';
import { BrowserRouter as Router, Route, Routes, /*useLocation*/ } from 'react-router-dom';
import InitialPage from '../pages/InitialPage/index.tsx';
import HomePage from '../pages/Home/index.tsx';
import Spells from '../pages/Spells/index.tsx';
import Itens from '../pages/Itens/index.tsx';
import { HeaderIndex, MainContentIndex } from '../components/RouterRender/index.tsx';


function AppRoutes() {
    // let location = useLocation();
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<InitialPage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/spells' element={<Spells/>} />
                    <Route path='/itens' element={<Itens/>} />
                    <Route path='/index' element={
                        <div>
                            <HeaderIndex />
                            <MainContentIndex />
                        </div>
                    }/>
                    
                    {/* Add more routes as necessary */}
                </Routes>
            </Router>
        </div>
    );
}
export default AppRoutes;