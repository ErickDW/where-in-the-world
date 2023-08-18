import type { ConfigTheme } from "@nextui-org/theme";

export const light: ConfigTheme = {
  colors: {
    background: "hsl(0, 0%, 98%)",
    foreground: "hsl(200, 15%, 8%)",
    primary: {
      400: "hsl(0, 0%, 52%)",
      500: "hsl(0, 0%, 100%)",
      600: "hsla(0, 0%, 0%, 0.2)",
      DEFAULT: "hsl(0, 0%, 100%)",
      foreground: "hsl(200, 15%, 8%)",
    },
    focus: "hsl(207, 23%, 38%)",
  }
}
