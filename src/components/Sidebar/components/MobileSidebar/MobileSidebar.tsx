import React from 'react';
import "./MobileSidebar.scss";
import MenuBurger from "@/assets/icons/menu-burger.svg";

interface MobileSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: string; // Assuming icon is a string representing the path to the icon
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isMenuOpen, setIsMenuOpen, icon }) => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-burger" onClick={() => setIsMenuOpen((prev) => !prev)}>
        <img src={icon || MenuBurger} alt="" />
      </div>
    </div>
  );
};

export default MobileSidebar;
