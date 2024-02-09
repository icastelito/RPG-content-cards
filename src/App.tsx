import * as S from "./Styles.ts";
import Routes from "./routes/index.tsx";
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, theme} from './styles/theme.tsx';


const App = () => {

  return(
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <S.Background>
      <S.MainContent>
        <Routes />
      </S.MainContent>
    </S.Background>
  </ThemeProvider>

  );
  
};


export default App;
