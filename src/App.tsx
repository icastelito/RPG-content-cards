import * as S from "./Styles.ts";
import Routes from "./routes/index.tsx";
import HeaderMenuNavigation from "./components/HeaderMenu/index.tsx";
import { menuNavigation } from "./utils.ts";

const App = () => {
  return (
    <S.Background>
      <S.HeaderContent>
        <HeaderMenuNavigation navigationItems={menuNavigation} />
      </S.HeaderContent>

      <S.MainContent>
        <Routes />
      </S.MainContent>
    </S.Background>
  );
};

export default App;
