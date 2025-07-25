interface ColorScheme {
	[key: string]: string;
}

export interface ThemeProps {
	colors: ColorScheme;
	fonts: {
		body: string;
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
		sm: string;
		md: string;
		lg: string;
		xl: string;
		full: string;
	};
	shadows: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
}
