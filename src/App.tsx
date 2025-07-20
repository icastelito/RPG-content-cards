import Routes from "./routes/index.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.tsx";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { useEffect, useState, createContext, useContext } from "react";
import * as S from "./Styles.ts";

// Context para o tema
interface ThemeContextType {
	theme: string;
	toggleTheme: () => void;
	iconName: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

const App = () => {
	// Função para obter o tema inicial do localStorage ou usar 'light' como padrão
	const getInitialTheme = () => {
		try {
			const savedTheme = localStorage.getItem("theme");
			return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
		} catch (error) {
			console.warn("Erro ao acessar localStorage:", error);
			return "light";
		}
	};

	const [theme, setTheme] = useState(getInitialTheme);
	const [iconName, setIconName] = useState("FaSun");

	useEffect(() => {
		setIconName(theme === "dark" ? "FaMoon" : "FaSun");

		// Salvar o tema no localStorage sempre que ele mudar
		try {
			localStorage.setItem("theme", theme);
		} catch (error) {
			console.warn("Erro ao salvar tema no localStorage:", error);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<ThemeContext.Provider value={{ theme, toggleTheme, iconName }}>
				<GlobalStyle />
				<S.Container>
					<Routes />
				</S.Container>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export default App;
