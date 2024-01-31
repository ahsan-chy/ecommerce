import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";

import "./Home.scss";
import ArrowWhite from "@/assets/icons/arrow-white.svg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = (props: { activeCollection: any; pageType?: string }) => {
  const {
    activeCollection,
    pageType, // VOTING - HOME
  } = props;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <SideMarginWrapper>
      <div className="home-container">
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

        <motion.div className="collection-featured-img">
          <motion.img
            src={activeCollection.mainImage}
            alt=""
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }}
            exit={{ opacity: 0, x: +100 }}
          />
        </motion.div>
      </div>
    </SideMarginWrapper>
  );
};

export default Home;
