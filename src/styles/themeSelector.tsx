import React, { createContext, useState } from "react";
import styled from "styled-components";



export const darkColors = {
  primary: "rgb(86,58,87)",
  secondary: "rgb(98, 138, 206)",
  white: "rgb(249, 249, 249)",
  lightGrey: "rgb(236, 236, 236)",
  mediumGrey: "rgb(167, 167, 167)",
  grey: "rgb(196, 196, 196)",
  darkGrey: "rgb(52, 52, 52)",
  black: "rgb(29, 2, 29)",
  green: "rgb(60, 150, 60)",
  blue: "rgb(27, 119, 243)",
  red: "rgb(207, 60, 63)",
};

export const lightColors = {
  primary: "rgb(255, 255, 255)",
  secondary: "rgb(98, 138, 206)",
  white: "rgb(249, 249, 249)",
  lightGrey: "rgb(236, 236, 236)",
  mediumGrey: "rgb(167, 167, 167)",
  grey: "rgb(196, 196, 196)",
  darkGrey: "rgb(52, 52, 52)",
  black: "rgb(29, 2, 29)",
  green: "rgb(60, 150, 60)",
  blue: "rgb(27, 119, 243)",
  red: "rgb(207, 60, 63)",
};



export const ToggleButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 10px;
  transition: 0.4s;
  position: absolute;
  top: 25px;
  left: 10px;

  &:hover {
    transition: 0.85s;
    transform: scale(1.03);
  }
`;

export const ThemeContext = createContext({
  selectedTheme: darkColors,
  toggleTheme: () => {},
});

interface ThemeButtonProps {
  children: React.ReactNode;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(darkColors);

  const toggleTheme = () => {
    setSelectedTheme((prevTheme) =>
      prevTheme === darkColors ? lightColors : darkColors
    );
  };

  function onclick() {
    console.log("clicked")
    console.log(selectedTheme)
    toggleTheme()
  }

  return (

    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    <ToggleButton onClick={onclick}/>

    </ThemeContext.Provider>

  );
};