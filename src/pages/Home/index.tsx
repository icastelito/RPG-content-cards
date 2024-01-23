// import * as S from './styles';
import {menuNavigation} from '../../utils.ts';
import SelectionMenuNavigation from '../../components/SelectionMenu/index.tsx';
const HomePage = () => {

    return (

        <div>
            <SelectionMenuNavigation navigationItems={menuNavigation}/>
        </div>

    )
  }

export default HomePage;