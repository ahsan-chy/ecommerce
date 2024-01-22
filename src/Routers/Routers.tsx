import Sidebar from "@/components/Sidebar/Sidebar";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Products from "@/pages/Products/Products";
import CategoryDetails from "@/pages/CategoryDetails/CategoryDetails";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Create from "@/pages/Create/Create";
import Construct from "@/pages/Construct/Construct";
import ConfirmConstruct from "@/pages/ConfirmConstruct/ConfirmConstruct";
import AboutUs from "@/pages/AboutUs/AboutUs";

function Routers() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category-details" element={<CategoryDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/create" element={<Create />} />
          <Route path="/Construct" element={<Construct />} />
          <Route path="/confirm-construct" element={<ConfirmConstruct />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
