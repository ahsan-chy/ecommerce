import React, { useState } from "react";
import "./Sidebar.scss";

import Cart from "@/assets/icons/cart.svg";
import MenuBurger from "@/assets/icons/menu-burger.svg";
import { collectionNav } from "@/db/collectionNew";

// const collectionNav = [
//   {
//     type: "URBAN",
//     title: "New",
//     heading: "Urban Collection",
//     mainImage: CollectionUrban,
//     status: "Active",
//   },
//   {
//     type: "APRIL",
//     title: "Creative User",
//     heading: "April Design",
//     mainImage: CollectionApril,
//     status: "Active",
//   },
//   {
//     type: "BLACK",
//     title: "All Products",
//     heading: "Black Style",
//     mainImage: CollectionBlack,
//     status: "Active",
//   },
// ];

// interface ISidebar {
//   setActiveCollection: (val: string) => void;
// }

// const Sidebar = (props: ISidebar) => {
const Sidebar = (props: { handleActive: any }) => {
  const { handleActive } = props;
  // const { setActiveCollection } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const onCollectionClick = () => {};

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
          <div className="nav-item collection-nav" onClick={() => handleActive(navData)}>
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
