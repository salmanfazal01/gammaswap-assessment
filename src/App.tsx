import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/Home";
import PoolPage from "./pages/Pool";

const App = () => {
  return (
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
  );
};

export default App;
