import Routes from "./routes/index.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.tsx";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { useEffect, useState } from "react";
import * as S from "./Styles.ts";
import RenderIcon from "./components/IconRender/index.tsx";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [toggled, setToggled] = useState(false);
  const [iconName, setIconName] = useState("FaMoon");

  useEffect(() => {
    setIconName(theme === "dark" ? "FaMoon" : "FaSun");
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <S.Container>
      <S.Button onClick={() => {toggleTheme(); setToggled(!toggled);}} toggled={toggled}><RenderIcon iconName={iconName}/></S.Button>
        <Routes />
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
