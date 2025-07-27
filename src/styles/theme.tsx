import "../fonts/fonts.css";

interface ColorScheme {
	[key: string]: string;
}

export interface ThemeProps {
	theme?: {
		colors: {
			primary: string;
			primaryLight: string;
			primaryDark: string;
			primaryForBackdropBlur: string;
			secondary: string;
			secondaryLight: string;
			secondaryDark: string;
			white: string;
			whiteLight: string;
			whiteDark: string;
			grey: string;
			greyLight: string;
			greyDark: string;
			black: string;
			blackLight: string;
			blackDark: string;
			green: string;
			greenLight: string;
			greenDark: string;
			blue: string;
			blueLight: string;
			blueDark: string;
			red: string;
			redLight: string;
			redDark: string;
			fontColorStandart: string;
			fontColorDark: string;
			fontColorLight: string;
		};
		fonts: {
			body: string;
			a: string;
			animation: string;
		};
		fontSizes: {
			xs: string;
			sm: string;
			base: string;
			lg: string;
			xl: string;
			"2xl": string;
			"3xl": string;
			"4xl": string;
			"5xl": string;
		};
		spacing: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			"2xl": string;
			"3xl": string;
		};
		borderRadius: {
			none: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			"2xl": string;
			full: string;
		};
		shadows: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
			"2xl": string;
		};
		breakpoints: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		getColor: (color: string, opacity: number) => string;
	};
}

export const lightTheme = {
	colors: {
		// Cores primárias - tons de roxo/violeta elegantes
		primary: "rgb(248, 250, 252)", // Fundo principal - quase branco
		primaryLight: "rgb(255, 255, 255)", // Branco puro
		primaryDark: "rgb(241, 245, 249)", // Cinza muito claro
		primaryForBackdropBlur: "rgb(248, 250, 252)", // Mesmo que primary

		// Cores secundárias - roxo vibrante para acentos
		secondary: "rgba(153, 127, 179, 1)", // Roxo principal mais escuro
		secondaryLight: "rgba(169, 146, 187, 1)", // Roxo médio
		secondaryDark: "rgba(118, 101, 131, 1)", // Roxo muito escuro

		// Escala de cinzas neutra
		white: "rgb(255, 255, 255)", // Branco puro
		whiteLight: "rgb(255, 255, 255)", // Branco puro
		whiteDark: "rgb(249, 250, 251)", // Quase branco
		grey: "rgb(156, 163, 175)", // Cinza médio
		greyLight: "rgb(209, 213, 219)", // Cinza claro
		greyDark: "rgb(107, 114, 128)", // Cinza escuro
		black: "rgb(17, 24, 39)", // Preto suave
		blackLight: "rgb(31, 41, 55)", // Cinza muito escuro
		blackDark: "rgb(0, 0, 0)", // Preto puro

		// Cores de status - mais vibrantes e modernas
		green: "rgb(34, 197, 94)", // Verde moderno
		greenLight: "rgb(74, 222, 128)", // Verde claro
		greenDark: "rgb(22, 163, 74)", // Verde escuro
		blue: "rgb(59, 130, 246)", // Azul moderno
		blueLight: "rgb(96, 165, 250)", // Azul claro
		blueDark: "rgb(37, 99, 235)", // Azul escuro
		red: "rgb(239, 68, 68)", // Vermelho moderno
		redLight: "rgb(248, 113, 113)", // Vermelho claro
		redDark: "rgb(220, 38, 38)", // Vermelho escuro

		// Cores de texto com melhor contraste
		fontColorStandart: "rgb(31, 41, 55)", // Cinza escuro para texto principal
		fontColorDark: "rgb(17, 24, 39)", // Quase preto para títulos
		fontColorLight: "rgb(107, 114, 128)", // Cinza para texto secundário
	} as ColorScheme,
	fonts: {
		body: "PTSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		a: "PTSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		animation: "'Trajan Pro', 'Times New Roman', serif",
	},
	fontSizes: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
	},
	spacing: {
		xs: "0.25rem", // 4px
		sm: "0.5rem", // 8px
		md: "1rem", // 16px
		lg: "1.5rem", // 24px
		xl: "2rem", // 32px
		"2xl": "3rem", // 48px
		"3xl": "4rem", // 64px
	},
	borderRadius: {
		none: "0",
		sm: "0.25rem", // 4px
		md: "0.5rem", // 8px
		lg: "0.75rem", // 12px
		xl: "1rem", // 16px
		"2xl": "1.5rem", // 24px
		full: "9999px",
	},
	shadows: {
		sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
		"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	},
	breakpoints: {
		mobile: "32em",
		tablet: "48em",
		desktop: "64em ",
	},
	getColor: (color: string, opacity: number) => {
		const rgb = lightTheme.colors[color]
			.substring(4, lightTheme.colors[color].length - 1)
			.split(",")
			.map((num) => +num);
		return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
	},
};

export const darkTheme = {
	colors: {
		// Cores primárias - fundo escuro elegante
		primary: "rgb(15, 23, 42)", // Azul escuro principal
		primaryLight: "rgb(30, 41, 59)", // Azul escuro mais claro
		primaryDark: "rgb(2, 6, 23)", // Azul escuro profundo
		primaryForBackdropBlur: "rgb(15, 23, 42)", // Mesmo que primary

		// Cores secundárias - roxo vibrante mantido
		secondary: "rgb(109, 40, 174)", // Roxo principal mais escuro
		secondaryLight: "rgb(139, 69, 195)", // Roxo médio
		secondaryDark: "rgb(88, 28, 135)", // Roxo muito escuro

		// Escala de cinzas para tema escuro
		white: "rgb(248, 250, 252)", // Quase branco
		whiteLight: "rgb(255, 255, 255)", // Branco puro
		whiteDark: "rgb(226, 232, 240)", // Cinza muito claro
		grey: "rgb(100, 116, 139)", // Cinza médio
		greyLight: "rgb(148, 163, 184)", // Cinza claro
		greyDark: "rgb(71, 85, 105)", // Cinza escuro
		black: "rgb(2, 6, 23)", // Preto profundo
		blackLight: "rgb(15, 23, 42)", // Cinza muito escuro
		blackDark: "rgb(0, 0, 0)", // Preto puro

		// Cores de status - ajustadas para tema escuro
		green: "rgb(34, 197, 94)", // Verde mantido
		greenLight: "rgb(74, 222, 128)", // Verde claro
		greenDark: "rgb(22, 163, 74)", // Verde escuro
		blue: "rgb(96, 165, 250)", // Azul mais claro para contraste
		blueLight: "rgb(147, 197, 253)", // Azul muito claro
		blueDark: "rgb(59, 130, 246)", // Azul padrão
		red: "rgb(248, 113, 113)", // Vermelho mais claro
		redLight: "rgb(252, 165, 165)", // Vermelho muito claro
		redDark: "rgb(239, 68, 68)", // Vermelho padrão

		// Cores de texto otimizadas para tema escuro
		fontColorStandart: "rgb(226, 232, 240)", // Texto principal claro
		fontColorDark: "rgb(203, 213, 225)", // Texto secundário
		fontColorLight: "rgb(248, 250, 252)", // Texto enfatizado
	} as ColorScheme,
	fonts: {
		body: "PTSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		a: "PTSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		animation: "'Trajan Pro', 'Times New Roman', serif",
	},
	fontSizes: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
	},
	spacing: {
		xs: "0.25rem", // 4px
		sm: "0.5rem", // 8px
		md: "1rem", // 16px
		lg: "1.5rem", // 24px
		xl: "2rem", // 32px
		"2xl": "3rem", // 48px
		"3xl": "4rem", // 64px
	},
	borderRadius: {
		none: "0",
		sm: "0.25rem", // 4px
		md: "0.5rem", // 8px
		lg: "0.75rem", // 12px
		xl: "1rem", // 16px
		"2xl": "1.5rem", // 24px
		full: "9999px",
	},
	shadows: {
		sm: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
		md: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
		lg: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
		xl: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
		"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
	},
	space: {
		small: 8,
		medium: 16,
		large: 24,
	},
	breakpoints: {
		mobile: "32em",
		tablet: "48em",
		desktop: "64em ",
	},
	getColor: (color: string, opacity: number) => {
		const rgb = darkTheme.colors[color]
			.substring(4, darkTheme.colors[color].length - 1)
			.split(",")
			.map((num) => +num);
		return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
	},
};
