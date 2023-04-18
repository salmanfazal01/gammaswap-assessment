import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import lightTheme from "../../src/config/theme/light";

const AppLayout = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Outlet />
    </ThemeProvider>
  );
};

export default AppLayout;
