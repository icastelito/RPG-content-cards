import * as S from './Styles.ts'
import Routes from './routes/index.tsx';
import HeaderMenuNavigation from './components/HeaderMenu/index.tsx';
import {menuNavigation} from './utils.ts';



const App = () => {



  return (
      <>
      <S.Background>
        <S.Header>
          <HeaderMenuNavigation navigationItems={menuNavigation}/>
        </S.Header>

        <S.Body>
          <Routes />
        </S.Body>
        
      </S.Background>
      </>
  )
}

export default App;





