import Routes from "./routes/index.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.tsx";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { useState } from "react";
import * as S from "./Styles.ts";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <S.Container>
        <S.Button onClick={toggleTheme}>Toggle Theme</S.Button>
        <Routes />
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
