import * as S from "./Styles.ts";
import Routes from "./routes/index.tsx";

const App = () => {
  return (
    <S.Background>
      <S.MainContent>
        <Routes />
      </S.MainContent>
    </S.Background>
  );
};

export default App;
