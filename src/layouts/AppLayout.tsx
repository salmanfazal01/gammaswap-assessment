import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import lightTheme from "../../src/config/theme/light";
import { PoolsContextProvider } from "../context/PoolsContext";

const AppLayout = () => {
  return (
    <PoolsContextProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <Outlet />
      </ThemeProvider>
    </PoolsContextProvider>
  );
};

export default AppLayout;
