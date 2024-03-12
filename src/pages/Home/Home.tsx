import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";

import "./Home.scss";
import ArrowWhite from "@/assets/icons/arrow-white.svg";
import { useNavigate, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeMenu from "@/components/Sidebar/components/HomeMenu/HomeMenu";
import VotingMenu from "@/components/Sidebar/components/VotingMenu/VotingMenu";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = (props: {
  activeCollection: any;
  pageType?: string;
  handleActive: any;
  selectedCollections: any;
}) => {
  const { activeCollection, pageType, handleActive, selectedCollections } = props;
  const [showImage, setShowImage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const pathnames = location.pathname.substring(1);

  const handleNavigate = () => {
    navigate("/products");
  };
  useEffect(() => {
    setShowImage(false);
    if (activeCollection.mainImage) {
      const delayTimeout = setTimeout(() => {
        setShowImage(true);
      }, 1000);
      return () => clearTimeout(delayTimeout);
    }
  }, [activeCollection.mainImage]);

  return (
    <SideMarginWrapper>
      {pathnames === "" && (
        <div className="home-top-menu">
          <HomeMenu collectionNav={selectedCollections} handleActive={handleActive} />
        </div>
      )}

      {/* <div className={`home-container ${pathnames} === "voting" && voting-container `}> */}
      <div className={`home-container ${pathnames === "voting" && "voting-container"}`}>
        <div className="home-left-wrapper">
          <div className="home-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
          {pageType === "VOTING" && (
            <div className="voting-back-wrapper">
              <BackNavigation navigateTo={"special-product"} pageName={"Back to all nominamts"} />
            </div>
          )}

          <div className="home-left">
            {pageType === "VOTING" ? (
              <div className="voting-titles-wrapper">
                <p>design by</p>
                <p>#namedesigner</p>
              </div>
            ) : (
              <div className="sub-head-box">
                <div className="spacer"></div>
                <p>{activeCollection.title}</p>
              </div>
            )}

            <h1>{activeCollection.heading}</h1>

            <p>{activeCollection.description}</p>
            {pageType !== "VOTING" && (
              <motion.button
                onClick={handleNavigate}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, x: -80 }}>
                SEE COLLECTION
                <img src={ArrowWhite} alt="ArrowWhite" />
              </motion.button>
            )}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className={`collection-featured-img  ${
              pathnames === "voting" && "voting-image-wrapper"
            }`}>
            {showImage && (
              <motion.img
                src={activeCollection.mainImage}
                alt=""
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }}
                exit={{ opacity: 0, x: 100 }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {pathnames === "voting" && (
        <div className="voting-reviews">
          <VotingMenu />
        </div>
      )}
    </SideMarginWrapper>
  );
};

export default Home;
