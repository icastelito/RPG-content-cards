interface ColorScheme {
        primary: string;
        white: string;
        [key: string]: string;
      }


export const theme = {
        colors: {
                primary: 'RGB(86, 58, 87)',
                white: 'RGB(255, 255, 255)',
        } as ColorScheme,
        fonts: {
                body: 'system-ui, sans-serif',
                heading: 'system-ui, sans-serif',
        },
        fontSizes: {
                small: '1em',
                medium: '2em',
                large: '3em',
        },
        space: {
                small: 8,
                medium: 16,
                large: 24,
        },
        breakpoints: {
                mobile: '32em',
                tablet: '48em',
                desktop: '64em',
        },
        getColor: (color: string, opacity: number) => {
                const rgb = theme.colors[color]
                        .substring(4, theme.colors[color].length - 1)
                        .split(',')
                        .map((num) => +num);
                return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        },
};