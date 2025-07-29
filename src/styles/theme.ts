interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
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
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    background: "#1b191fff",
    primary: "#7730DA",
    secondary: "#B979FE",
    tertiary: "#ECEBFB",
  },
};
