import React, { useState } from "react";
import "./Sidebar.scss";

import CollectionUrban from "@/assets/images/collection-urban.png";
import CollectionApril from "@/assets/images/collection-april.png";
import CollectionBlack from "@/assets/images/collection-black.png";
import Cart from "@/assets/icons/cart.svg";

const collectionNav = [
  {
    type: "URBAN",
    title: "New",
    heading: "Urban Collection",
    mainImage: CollectionUrban,
  },
  {
    type: "APRIL",
    title: "Creative User",
    heading: "April Design",
    mainImage: CollectionApril,
  },
  {
    type: "BLACK",
    title: "All Products",
    heading: "Black Style",
    mainImage: CollectionBlack,
  },
];

// interface ISidebar {
//   setActiveCollection: (val: string) => void;
// }

// const Sidebar = (props: ISidebar) => {
const Sidebar = () => {
  // const { setActiveCollection } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const onCollectionClick = () => {};

  return (
    <div className="navbar-container">
      <div className="leftbar">
        <div className="leftbar-1">
          <div onClick={() => setIsMenuOpen((prev) => !prev)}>{!isMenuOpen ? "Menu" : "x"}</div>
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
          <div
            className="nav-item collection-nav"
            onClick={() => {
              // onCollectionClick(navData.key)
            }}
          >
            <img src={navData.mainImage} alt="" />
            <div>
              <p>{navData.title}</p>
              <h3>{navData.heading}</h3>
            </div>
          </div>
        ))}

        {/* <div className="nav-item collection-nav">
          <img src={collectionNav[0].mainImage} alt="" />
          <div>
            <p>New</p>
            <h3>Urban Collection</h3>
          </div>
        </div>
        <div className="nav-item collection-nav">
          <img src={CollectionApril} alt="" />
          <div>
            <p>Creative User</p>
            <h3>April Design</h3>
          </div>
        </div>
        <div className="nav-item collection-nav">
          <img src={CollectionBlack} alt="" />
          <div>
            <p>All Products</p>
            <h3>Black Style</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
