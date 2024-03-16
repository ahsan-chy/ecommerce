/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./HomeMenu.scss";

interface HomeMenuProps {
  collectionNav?: any[];
  handleActive: (navData: any) => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ collectionNav, handleActive }) => {
  return (
    <>
      {collectionNav && collectionNav.map((navData) => (
        <div
          className={`${
            navData.status === true ? "active-right-nav" : "de-active-right"
          } nav-item collection-nav`}
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
