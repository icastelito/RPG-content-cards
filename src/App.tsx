import * as S from './Styles.ts'
import Routes from './routes/index.tsx';
import HeaderMenuNavigation from './components/HeaderMenu/index.tsx';
import {headerMenuNavigation} from './utils.ts';



const App = () => {


console.log(headerMenuNavigation);

  return (
      <>
      <S.Background>
        <S.Header>
          
          
          <HeaderMenuNavigation navigationItems={headerMenuNavigation}/>
        </S.Header>

        <S.Body>
          <Routes />
        </S.Body>
        
      </S.Background>
      </>
  )
}

export default App;





