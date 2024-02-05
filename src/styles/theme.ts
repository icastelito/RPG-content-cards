interface ColorScheme {
        [key: string]: string;
      }


export const theme = {
        colors: {
                primary: 'RGB(86, 58, 87)',
                secondary: 'RGB(98, 138, 206)',
                red: 'RGB(200, 0, 0)',
                blue: 'RGB(0, 0, 200)',
                green: 'RGB(0, 200, 0)',
                grey: 'RGB(180, 180, 180)',
                white: 'RGB(250, 250, 250)',
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