import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import darkTheme from "../../src/config/theme/dark";

const HomeLayout = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Outlet />
    </ThemeProvider>
  );
};

export default HomeLayout;
