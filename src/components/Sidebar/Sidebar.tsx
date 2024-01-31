import { useEffect, useState } from "react";
import { To, useLocation, useNavigate } from "react-router";
import "./Sidebar.scss";

import Cart from "@/assets/icons/cart.svg";
import MenuBurger from "@/assets/icons/menu-burger.svg";
import Heart from "@/assets/icons/heart.svg";
import { collectionNav } from "@/db/collectionNew";
import ConstructorMenu from "./components/ConstructorMenu/ConstructorMenu";
import SpecialProductMenu from "./components/SpecialProductMenu/SpecialProductMenu";
import VotingMenu from "./components/VotingMenu/VotingMenu";
import CartMenu from "./components/CartMenu/CartMenu";
import ShippingPaymentMenu from "./components/ShippingPaymentMenu/ShippingPaymentMenu";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import SingleCartMenu from "./components/SingleCartMenu/SingleCartMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const sidebarData = [
  {
    key: 1,
    text: "Home",
    path: "/",
    isActive: true,
  },
  {
    key: 2,
    text: "All Prducts",
    path: "/products",
    isActive: false,
  },
  {
    key: 3,
    text: "Creation",
    path: "/create",
    isActive: false,
  },
  {
    key: 4,
    text: "Special Offer",
    path: "/special-offer",
    isActive: false,
  },
  {
    key: 5,
    text: "FAQ",
    path: "/about",
    isActive: false,
  },
  {
    key: 6,
    text: "Favorites",
    path: "/favorites",
    icon: (
      <span className="favourites-icon">
        <img src={Heart} alt="" />
        <span>2</span>
      </span>
    ),
    isActive: false,
  },
];

const creativeUserOptions = [
  {
    key: 5,
    text: "Voting",
    path: "/voting",
    isActive: false,
  },
  {
    key: 6,
    text: "Monthly Design",
    path: "/monthly-design",
    isActive: false,
  },
];

// const Sidebar = (props: ISidebar) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = (props: { handleActive: any }) => {
  const { handleActive } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [SelectedRoute, setSelectedRoute] = useState(sidebarData);

  const pathnames = location.pathname.substring(1);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleActiveRoute = (param: { path: string }) => {
    navigate(param.path);
    setSelectedRoute((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item === param ? true : false,
      }))
    );
  };

  return (
    <div className="navbar-container">
      <div className="leftbar">
        <div className="leftbar-1">
          <div onClick={() => setIsMenuOpen((prev) => !prev)}>
            {!isMenuOpen ? <img src={MenuBurger} alt="" /> : <img src={MenuBurger} alt="" />}
          </div>
          <div className="dot-icons-list">
            {SelectedRoute.slice(0, 5).map((side, index) => (
              <div
                onClick={() => handleActiveRoute(side)}
                key={index}
                className={`${side.isActive === true ? "active-circle" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className={`leftbar-2 ${isMenuOpen ? "leftbar-2-open" : "leftbar-2-close"}`}>
          <h3>Burger Menu</h3>

          <div className="primary-menu-options">
            <ul>
              {SelectedRoute.map((menuItem, index) => (
                <li key={index} onClick={() => handleActiveRoute(menuItem)}>
                  <div className={`menu ${menuItem.isActive ? "active" : "de-active"}`} />
                  <span
                    style={{ marginLeft: menuItem.isActive ? "95px" : "45px" }}
                    className="menuItem-text">
                    {menuItem.icon} {menuItem.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="creative-user-options">
            <h4>Creative User</h4>
            <ul>
              {creativeUserOptions.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.isActive && <div />}
                  <span style={{ marginLeft: menuItem.isActive ? "95px" : "45px" }}>
                    {menuItem.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="we-are-online">
            <h4>We are online</h4>
            <div className="steps">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="rightbar"
        initial={{ opacity: 0, x: +100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } }}
        exit={{ opacity: 0, x: +100 }}>
        <div className="nav-item store-nav">
          <img src={Cart} alt="" />
          <p>150.55 $</p>
        </div>
        <div className="nav-item store-nav">
          <img src={Cart} alt="" />
          <div>
            <p>Creative User</p>
            <h3>Voting</h3>
          </div>
        </div>
                
        {pathnames === "" ? (
          <HomeMenu collectionNav={collectionNav} handleActive={handleActive} />
        ) : pathnames === "construct" ? (
          <ConstructorMenu />
        ) : pathnames === "special-product" ? (
          <SpecialProductMenu />
        ) : pathnames === "voting" ? (
          <VotingMenu />
        ) : pathnames === "cart" ? (
          <CartMenu />
        ) : pathnames === "single-cart" ? (
          <SingleCartMenu />
        ) : pathnames === "shipping-and-payment" ? (
          <ShippingPaymentMenu />
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
