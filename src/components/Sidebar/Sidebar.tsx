import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./Sidebar.scss";

import Cart from "@/assets/icons/cart.svg";
import cross from "@/assets/icons/x-button.png";
import MenuBurger from "@/assets/icons/menu-burger.svg";
import Heart from "@/assets/icons/heart.svg";
import ConstructorMenu from "./components/ConstructorMenu/ConstructorMenu";
import SpecialProductMenu from "./components/SpecialProductMenu/SpecialProductMenu";
import VotingMenu from "./components/VotingMenu/VotingMenu";
import CartMenu from "./components/CartMenu/CartMenu";
import ShippingPaymentMenu from "./components/ShippingPaymentMenu/ShippingPaymentMenu";
import HomeMenu from "./components/HomeMenu/HomeMenu";
import SingleCartMenu from "./components/SingleCartMenu/SingleCartMenu";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";
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
    text: "Help & FAQ",
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

const productsMenu = [
  {
    key: 1,
    text: "T-Shirt",
    path: "/products",
    isActive: true,
  },
  {
    key: 2,
    text: "Hoodie",
    path: "/products",
    isActive: false,
  },
  {
    key: 3,
    text: "Long sleeve",
    path: "/products",
    isActive: false,
  },
  {
    key: 4,
    text: "Sweatshirt",
    path: "/products",
    isActive: false,
  },
  {
    key: 5,
    text: "Shorts",
    path: "/products",
    isActive: false,
  },
  {
    key: 6,
    text: "Tank",
    path: "/products",
    isActive: false,
  },
  {
    key: 7,
    text: "Hat",
    path: "/products",
    isActive: false,
  },
  {
    key: 8,
    text: "Footwear",
    path: "/products",
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

const constructorMenu = [
  {
    key: 1,
    text: "Gender",
    subText: "man",
    path: "/construct",
    isActive: false,
  },
  {
    key: 2,
    text: "Type",
    subText: "T-Shirt",
    path: "/construct",
    isActive: false,
  },
  {
    key: 3,
    text: "Model",
    subText: "regular",
    path: "/construct",
    isActive: false,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = (props: { handleActive: any; selectedCollections: any }) => {
  const { handleActive, selectedCollections } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [leftIsMenuOpen, setleftIsMenuOpen] = useState(false);
  const [SelectedRoute, setSelectedRoute] = useState(sidebarData);
  const [subMenu, setSubMenu] = useState(constructorMenu);

  const pathnames = location.pathname.substring(1);

  const handleActiveRoute = (param: { path: string }) => {
    navigate(param.path);
    setSelectedRoute((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item === param ? true : false,
      }))
    );
  };

  const handleSubActiveRoute = (param: { path: string }) => {
    setleftIsMenuOpen((prevState) => !prevState);
    setSubMenu((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item === param ? !item.isActive : false,
      }))
    );
  };

  return (
    <div className="navbar-container">
      <div className="leftbar">
        <motion.div
          className="leftbar-1"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } }}>
          <motion.div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}>
            {!isMenuOpen ? <img src={MenuBurger} alt="" /> : <img src={MenuBurger} alt="" />}
          </motion.div>
          {(pathnames === "construct" || pathnames === "confirm-construct") && (
            <div className="middle-left">
              <div className="left-menu-wrapper">
                {subMenu.map((menu, index) => (
                  <div
                    className={`menu-option-box ${menu.isActive === true ? "active-menu" : ""}`}
                    key={index}
                    onClick={() => handleSubActiveRoute(menu)}>
                    <p>{menu.text}</p>
                    <span>{menu.subText}</span>
                  </div>
                ))}
              </div>
              {leftIsMenuOpen && (
                <div className="left-sub-men">
                  {productsMenu.map((p, i) => (
                    <p key={i} className="sub-name">
                      {p.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          <motion.div
            className="dot-icons-list"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.3 } }}>
            {SelectedRoute.slice(0, 5).map((side, index) => (
              <div
                onClick={() => handleActiveRoute(side)}
                key={index}
                className={`${side.isActive === true ? "active-circle" : ""}`}
              />
            ))}
          </motion.div>
        </motion.div>
        <div
          className={`leftbar-2 ${pathnames}  === "" ? noflex : ""  ${
            isMenuOpen ? "leftbar-2-open" : "leftbar-2-close"
          }`}>
          <div className="x-btn" onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={cross} alt="" />
          </div>
          {pathnames === "" ? (
            <h3>Burger Menu</h3>
          ) : (
            <div>
              <h3>Clothes</h3>
              <h3>Designer</h3>
            </div>
          )}

          {pathnames === "category-details" || pathnames === "product-details" ? (
            <div className="primary-menu-options">
              <ul>
                {productsMenu.map((menuItem, index) => (
                  <li key={index} onClick={() => handleActiveRoute(menuItem)}>
                    <div
                      className={`menu ${menuItem.isActive === true ? "active" : "de-active"}`}
                    />
                    <span
                      // style={{ marginLeft: menuItem.isActive === true ? "95px" : "45px" }}
                      className={`menuItem-text ${menuItem.isActive ? "isActive" : ""}`}>
                      {menuItem.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={`primary-menu-options ${pathnames && "gap-top"}   `}>
              <ul>
                {SelectedRoute.map((menuItem, index) => (
                  <li key={index} onClick={() => handleActiveRoute(menuItem)}>
                    <div className={`menu ${menuItem.isActive ? "active" : "de-active"}`} />
                    <span
                      // style={{ marginLeft: menuItem.isActive ? "95px" : "45px" }}
                      className={`menuItem-text ${menuItem.isActive ? "isActive" : ""}`}>
                      {menuItem.icon} {menuItem.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pathnames === "" && (
            <div className="creative-user-options">
              <h4>Creative User</h4>
              <ul>
                {creativeUserOptions.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.isActive && <div />}
                    <span className={`menuItem-text ${menuItem.isActive ? "isActive" : ""}`}>
                      {menuItem.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pathnames !== "" && <button>CREATE YOUR</button>}

          {pathnames === "" && (
            <div className="we-are-online">
              <h4>We are online</h4>
              <div className="steps">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
          )}
        </div>
        <MobileSidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>

      <motion.div
        className={`rightbar right-2`}
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
          <HomeMenu collectionNav={selectedCollections} handleActive={handleActive} />
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
