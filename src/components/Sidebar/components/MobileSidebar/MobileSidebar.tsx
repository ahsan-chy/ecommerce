import React from "react";
import "./MobileSidebar.scss";
import MenuBurger from "@/assets/icons/white-menu-burger.svg";
import whiteStar from "@/assets/icons/star-empty.svg";
import Cart from "@/assets/icons/cart.svg";

interface MobileSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: string; // Assuming icon is a string representing the path to the icon
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ setIsMenuOpen, icon }) => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-burger" onClick={() => setIsMenuOpen((prev) => !prev)}>
        <img src={icon || MenuBurger} alt="" />
      </div>
      <div className="page-title">
        <h5>
          Clothes <br /> Designer{" "}
        </h5>
      </div>
      <div className="right-options">
        <div className="star-box">
          <img src={whiteStar} alt="" />
        </div>
        <div className="cart-count-box">
          <img src={Cart} alt="" />
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
