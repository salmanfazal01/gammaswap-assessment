import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Swap from "./pages/Swap";

const App = () => {
  return (
    <Routes>
      {/* Home Layout */}
      <Route element={<HomeLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>

      {/* App Layout */}
      <Route element={<AppLayout />}>
        <Route path="/swap" element={<Swap />} />
      </Route>
    </Routes>
  );
};

export default App;
