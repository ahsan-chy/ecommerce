import { useState } from "react";
import { useNavigate } from "react-router";
import "./Sidebar.scss";

import Cart from "@/assets/icons/cart.svg";
import MenuBurger from "@/assets/icons/menu-burger.svg";
import Heart from "@/assets/icons/heart.svg";
import { collectionNav } from "@/db/collectionNew";

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
    text: "Constuctor",
    path: "/construct",
    isActive: false,
  },
  {
    key: 5,
    text: "Special Offer",
    path: "/special-offer",
    isActive: false,
  },
  {
    key: 6,
    text: "Help & FAQ",
    path: "/about",
    isActive: false,
  },
  {
    key: 7,
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

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="leftbar">
        <div className="leftbar-1">
          <div onClick={() => setIsMenuOpen((prev) => !prev)}>
            {!isMenuOpen ? <img src={MenuBurger} alt="" /> : <img src={MenuBurger} alt="" />}
          </div>
          <div className="dot-icons-list">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className={`leftbar-2 ${isMenuOpen ? "leftbar-2-open" : "leftbar-2-close"}`}>
          <h3>Burger Menu</h3>

          <div className="primary-menu-options">
            <ul>
              {sidebarData.map((menuItem, index) => (
                <li key={index} onClick={() => navigate(menuItem.path)}>
                  {menuItem.isActive && <div />}
                  <span style={{ marginLeft: menuItem.isActive ? "95px" : "45px" }}>
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

      <div className="rightbar">
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

        {collectionNav.map((navData) => (
          <div
            className="nav-item collection-nav"
            onClick={() => handleActive(navData)}
            key={navData.id}>
            <img src={navData.mainImage} alt="" />
            <div>
              <p>{navData.title}</p>
              <h3>{navData.heading}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
