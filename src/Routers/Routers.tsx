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
import SpecialProduct from "@/pages/SpecialProduct/SpecialProduct";
import Voting from "@/pages/Voting/Voting";
import VotingAll from "@/pages/VotingAll/VotingAll";
import Cart from "@/pages/Cart/Cart";
import ShipPayment from "@/pages/ShipPayment/ShipPayment";
import Receipt from "@/pages/Receipt/Receipt";
import SingleCart from "@/pages/SingleCart/SingleCart";

function Routers() {
  const [selectedCollections, setselectedCollections] = useState(collectionNav);
  const [activeCollection, setActiveCollection] = useState(selectedCollections[0]);

  const handleActive = (selectedState: any) => {
    const updatedCollection = collectionNav.map((item) => {
      if (item.id === selectedState.id) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });
    setselectedCollections(updatedCollection);
    const updatedCollectionObject = updatedCollection.filter((item) => item.status === true);
    setActiveCollection(updatedCollectionObject[0]);
  };

  return (
    <Router>
      <div className="global-box">
        <Sidebar handleActive={handleActive} selectedCollections={selectedCollections} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeCollection={activeCollection}
                handleActive={handleActive}
                selectedCollections={selectedCollections}
              />
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/category-details" element={<CategoryDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/construct"
            element={
              <Construct handleActive={handleActive} selectedCollections={selectedCollections} />
            }
          />
          <Route
            path="/confirm-construct"
            element={
              <ConfirmConstruct
                handleActive={handleActive}
                selectedCollections={selectedCollections}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/special-offer" element={<SpecialOffer />} />
          <Route path="/special-product" element={<SpecialProduct />} />
          <Route path="/voting" element={<Voting activeCollection={activeCollection} 
                handleActive={handleActive}
                selectedCollections={selectedCollections} />} />
          <Route path="/voting-all" element={<VotingAll />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single-cart" element={<SingleCart />} />
          <Route path="/shipping-and-payment" element={<ShipPayment />} />
          <Route path="/receipt" element={<Receipt />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
