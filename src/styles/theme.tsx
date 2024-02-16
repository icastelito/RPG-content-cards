import '../fonts/fonts.css'

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
    };
  };
}

export const lightTheme = {
  colors: {
    primary:            "rgb(234, 172, 171)",
    primaryLight:       "rgb(254, 192, 191)",
    primaryDark:        "rgb(214, 152, 151)",
    primaryForBackdropBlur: "rgb(207, 119, 117)",
    secondary:          "rgb(020, 138, 128)",
    secondaryLight:     "rgb(040, 158, 148)",
    secondaryDark:      "rgb(000, 118, 108)",
    white:              "rgb(230, 230, 230)",
    whiteLight:         "rgb(250, 250, 250)",
    whiteDark:          "rgb(210, 210, 210)",
    grey:               "rgb(180, 180, 180)",
    greyLight:          "rgb(200, 200, 200)",
    greyDark:           "rgb(160, 160, 160)",
    black:              "rgb(050, 050, 050)",
    blackLight:         "rgb(070, 070, 070)",
    blackDark:          "rgb(030, 030, 030)",
    green:              "rgb(130, 190, 130)",
    greenLight:         "rgb(150, 210, 150)",
    greenDark:          "rgb(110, 170, 110)",
    blue:               "rgb(137, 207, 240)",
    blueLight:          "rgb(157, 227, 260)",
    blueDark:           "rgb(117, 197, 230)",
    red:                "rgb(235, 105, 097)",
    redLight:           "rgb(255, 125, 117)",
    redDark:            "rgb(215, 085, 087)",
    fontColorStandart:  "rgb(030, 030, 030)",
    fontColorDark:      "rgb(015, 015, 015)",
    fontColorLight:     "rgb(060, 060, 060)",
  } as ColorScheme,
  fonts: {
    body:         "PTSans",
    a:            "PTSans",
    animation:    "Trajan Pro"
  },
  fontSizes: {
    small:        "1em",
    medium:       "2em",
    large:        "3em",
  },
  space: {
    small:        8 ,
    medium:       16,
    large:        24,
  },
  breakpoints: {
    mobile:       "32em",
    tablet:       "48em",
    desktop:      "64em ",
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
    primary:            "rgb(104, 058, 123)",
    primaryLight:       "rgb(114, 068, 133)",
    primaryDark:        "rgb(094, 048, 113)",
    primaryForBackdropBlur: "rgb(063, 045, 071)",
    secondary:          "rgb(141, 198, 063)",
    secondaryLight:     "rgb(151, 208, 073)",
    secondaryDark:      "rgb(131, 188, 053)",
    white:              "rgb(200, 200, 200)",
    whiteLight:         "rgb(210, 210, 210)",
    whiteDark:          "rgb(190, 190, 190)",
    grey:               "rgb(160, 160, 160)",
    greyLight:          "rgb(170, 170, 170)",
    greyDark:           "rgb(150, 150, 150)",
    black:              "rgb(030, 030, 030)",
    blackLight:         "rgb(040, 040, 040)",
    blackDark:          "rgb(020, 020, 020)",
    green:              "rgb(060, 150, 060)",
    greenLight:         "rgb(070, 160, 070)",
    greenDark:          "rgb(050, 140, 050)",
    blue:               "rgb(027, 119, 243)",
    blueLight:          "rgb(037, 129, 253)",
    blueDark:           "rgb(017, 109, 233)",
    red:                "rgb(207, 060, 063)",
    redLight:           "rgb(217, 070, 073)",
    redDark:            "rgb(197, 050, 053)",
    fontColorStandart:  "rgb(225, 225, 225)",
    fontColorDark:      "rgb(200, 200, 200)",
    fontColorLight:     "rgb(240, 240, 240)",
  } as ColorScheme,
  fonts: {
    body:         "PTSans",
    a:            "PTSans",
    animation:    "Trajan Pro"
  },
  fontSizes: {
    small:        "1em",
    medium:       "2em",
    large:        "3em",
  },
  space: {
    small:        8 ,
    medium:       16,
    large:        24,
  },
  breakpoints: {
    mobile:       "32em",
    tablet:       "48em",
    desktop:      "64em ",
  },
  getColor: (color: string, opacity: number) => {
    const rgb = darkTheme.colors[color]
      .substring(4, darkTheme.colors[color].length - 1)
      .split(",")
      .map((num) => +num);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
  },
};
