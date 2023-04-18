import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0085FF",
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      primary: "#1C1C1C",
      secondary: "#585757",
    },
  },
});

export default theme;
