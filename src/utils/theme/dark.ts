import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#1A1A1A",
    },
    text: {
      primary: "#E8E8E8",
      secondary: "#767676",
    },
  },
});

export default theme;
