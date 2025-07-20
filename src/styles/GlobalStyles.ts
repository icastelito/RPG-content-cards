import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";

export const GlobalStyle = createGlobalStyle<ThemeProps>`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary} 0%, ${(props) =>
	props.theme.colors.primaryLight} 100%);
  font-family: ${(props) => props.theme.fonts.body}, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.fontColorStandart};
  overflow-x: hidden;
}

#root {
  width: 100%;
  min-height: 100vh;
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
svg {
    color: ${(props) => props.theme.colors.fontColorStandart};}
  }

`;
