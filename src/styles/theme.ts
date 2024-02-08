import { createGlobalStyle } from "styled-components";


interface ColorScheme {
        [key: string]: string;
      }


export const theme = {
        colors: {
                primary: 'RGB(86, 58, 87)',
                secondary: 'RGB(98, 138, 206)',
                white: 'rgb(249, 249, 249)',
                lightGrey: 'rgb(236, 236, 236)',
                mediumGrey: 'rgb(167, 167, 167)',
                grey: 'rgb(196, 196, 196)',
                darkGrey: 'rgb(52, 52, 52)',
                black: 'rgb(29, 2, 29)',
                green: 'RGB(0, 200, 0)',
                blue:'rgb(27, 119, 243)',
                red: 'rgb(207, 60, 63)',
        } as ColorScheme,
        fonts: {
                body: 'comic-sans, sans-serif',
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
        export const GlobalStyle = createGlobalStyle`
          body {
                margin: 0;
                padding: 0;
                display: flex;
                place-items: center;
                min-width: 320px;
                min-height: 100vh;
          }

          a {
                font-weight: 500;
                color: ${theme.colors.white};
                text-decoration: inherit;
              }
              a:hover {
                color: ${theme.colors.darkGrey};
              }
        `;