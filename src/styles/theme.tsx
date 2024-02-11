import '../fonts/fonts.css'

interface ColorScheme {
  [key: string]: string;
}

export const lightTheme = {
  colors: {
    primary:      "rgb(175, 158, 176)",
    secondary:    "rgb(160, 190, 236)",
    white:        "rgb(249, 249, 249)",
    greySet1:     "rgb(236, 236, 236)",
    greySet2:     "rgb(200, 200, 200)",
    greySet3:     "rgb(220, 220, 220)",
    greySet4:     "rgb(128, 128, 128)",
    black:        "rgb(105, 105, 105)",
    green:        "rgb(120, 190, 120)",
    blue:         "rgb(100, 169, 255)",
    red:          "rgb(230, 120, 122)",
  } as ColorScheme,
  fonts: {
    body:         "Comic-sans",
    a:            "Arial, sans-serif",
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
    primary:      "rgb(086, 058, 087)",
    secondary:    "rgb(098, 138, 206)",
    white:        "rgb(200, 200, 200)",
    greySet1:     "rgb(180, 180, 180)",
    greySet2:     "rgb(160, 160, 160)",
    greySet3:     "rgb(100, 100, 100)",
    greySet4:     "rgb(050, 050, 050)",
    black:        "rgb(029, 002, 029)",
    green:        "rgb(060, 150, 060)",
    blue:         "rgb(027, 119, 243)",
    red:          "rgb(207, 060, 063)",
  } as ColorScheme,
  fonts: {
    body:         "Comic-sans",
    a:            "'Comic Sans MS', sans-serif",
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
