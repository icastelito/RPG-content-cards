import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";



export const GlobalStyle = createGlobalStyle<ThemeProps>`
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
    color: ${(props) => props.theme.colors.fontColorStandart};
    text-decoration: inherit;
    font-size: 1.5em;
    font-family: ${(props) => props.theme.fonts.a};
    transition: color 0.25s ease;
  }
a:hover {
    transition: color 0.5s ease;
    color: ${(props) => props.theme.colors.fontColorDark};
  }
h1 {
    font-family: ${(props) => props.theme.fonts.a};
    color: ${(props) => props.theme.colors.fontColorStandart};}
h2 {
    font-family: ${(props) => props.theme.fonts.a};
    color: ${(props) => props.theme.colors.fontColorStandart};}
p {
    font-family: ${(props) => props.theme.fonts.a};
    color: ${(props) => props.theme.colors.fontColorStandart};}
* {
    color: ${(props) => props.theme.colors.fontColorStandart};}
  }

`;
