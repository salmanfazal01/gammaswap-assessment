import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/Home";
import PoolPage from "./pages/Pool";
import { Suspense } from "react";
import LoadingScreen from "./components/Loaders/LoadingScreen";
import "./index.css";
import { PoolsContextProvider } from "./context/PoolsContext";

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Home Layout */}
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>

        {/* App Layout */}
        <Route element={<AppLayout />}>
          <Route path="/pool" element={<PoolPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
