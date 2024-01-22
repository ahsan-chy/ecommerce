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
import { useState } from "react";
import { collectionNav } from "@/db/collectionNew";
import SpecialOffer from "@/pages/SpecialOffer/SpecialOffer";

function Routers() {
  const [activeCollection, setActiveCollection] = useState(collectionNav[0]);

  const handleActive = (selectedState: any) => {
    setActiveCollection(selectedState);
  };
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar handleActive={handleActive} />
        <Routes>
          <Route path="/" element={<Home activeCollection={activeCollection} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category-details" element={<CategoryDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/create" element={<Create />} />
          <Route path="/construct" element={<Construct />} />
          <Route path="/confirm-construct" element={<ConfirmConstruct />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/special-offer" element={<SpecialOffer />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
