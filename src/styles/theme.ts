interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  gray: {
    light: string;
    medium: string;
    dark: string;
  };
  border: string;
  textSecondary: string;
  backgroundLight: string;
  backgroundExtraLight: string;
}

interface Theme {
  mode: "light" | "dark"; // 라이트/다크 모드
  colors: Colors;
}

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    background: "#fcfaffff",
    primary: "#6200ee",
    secondary: "#B979FE",
    tertiary: "#ECEBFB",
    gray: {
      light: "#F0F0F0",
      medium: "#E5E5E5",
      dark: "#666666"
    },
    border: "#E5E5E5",
    textSecondary: "#666",
    backgroundLight: "#f5f5f5",
    backgroundExtraLight: "#e0e0e0"
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    background: "#1b191fff",
    primary: "#7730DA",
    secondary: "#B979FE",
    tertiary: "#ECEBFB",
    gray: {
      light: "#F0F0F0",
      medium: "#E5E5E5",
      dark: "#666666"
    },
    border: "#ddd",
    textSecondary: "#666",
    backgroundLight: "#f5f5f5",
    backgroundExtraLight: "#e0e0e0"
  },
};
