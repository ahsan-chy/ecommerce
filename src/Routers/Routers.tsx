import Sidebar from "@/components/Sidebar/Sidebar";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Products from "@/pages/Products/Products";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";

function Routers() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
