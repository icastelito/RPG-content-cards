import { createContext, useContext } from "react";
import { ThemeContextType } from "../types/context";

// Context para o tema
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
