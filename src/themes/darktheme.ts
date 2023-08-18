import type { ConfigTheme } from "@nextui-org/theme";

export const dark: ConfigTheme = {
  colors: {
    background: "hsl(207, 26%, 17%)",
    foreground: "hsl(0, 0%, 100%)",
    primary: {
      400: "hsl(0, 0%, 100%)",
      500: "hsl(209, 23%, 22%)",
      600: "hsla(0, 0%, 0%, 0.2)",
      DEFAULT: "hsl(209, 23%, 22%)",
      foreground: "hsl(0, 0%, 100%)",
    },
    focus: "hsl(207, 23%, 38%)",
  }
}
