import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Departments } from "./pages/Departments";
import { Products } from "./pages/Products";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-black text-white">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
