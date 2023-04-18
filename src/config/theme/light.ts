import { createTheme } from "@mui/material";
import themeTypography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0085FF",
      light: "#339DFF",
      dark: "#1272CC",
    },
    secondary: {
      main: "#F7F7F7",
      dark: "#E8E8E8",
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      primary: "#1C1C1C",
      secondary: "#969696",
    },
  },
  typography: themeTypography,
});

export default theme;
