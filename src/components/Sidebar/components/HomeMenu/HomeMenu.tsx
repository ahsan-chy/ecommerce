import React from "react";
import "./HomeMenu.scss";

interface HomeMenuProps {
  collectionNav: any[];
  handleActive: (navData: any) => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ collectionNav, handleActive }) => {
  return (
    <>
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
    </>
  );
};

export default HomeMenu;
