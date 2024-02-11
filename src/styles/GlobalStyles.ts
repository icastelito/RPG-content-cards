import { createGlobalStyle } from "styled-components";


interface Props {
  theme?: {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      greySet1: string;
      greySet2: string;
      greySet3: string;
      greySet4: string;
      black: string;
      green: string;
      blue: string;
      red: string;
    };
    fonts: {
      body: string;
      a: string;
    };
  };
}

export const GlobalStyle = createGlobalStyle<Props>`
          body {
                margin: 0;
                padding: 0;
                display: flex;
                place-items: center;
                min-width: 320px;
                min-height: 100vh;
                justify-content: center;
                background-color: ${(props) => props.theme.colors.primary};
          }

          a {
                color: ${(props) => props.theme.colors.white};
                text-decoration: inherit;
                font-size: 1.5em;
                font-family: 'Comic Sans MS', sans-serif;
                transition: color 0.25s ease;
              }
              a:hover {
                transition: color 0.5s ease;
                color: ${(props) => props.theme.colors.secondary};
              }
        `;
