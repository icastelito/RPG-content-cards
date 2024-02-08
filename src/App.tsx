import * as S from "./Styles.ts";
import Routes from "./routes/index.tsx";
import { ThemeProvider } from 'styled-components';
import {theme, GlobalStyle} from './styles/theme.ts';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <S.Background>
      <S.MainContent>
        <Routes />
      </S.MainContent>
    </S.Background>
  </ThemeProvider>
);


export default App;
