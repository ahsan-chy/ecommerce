import "./SpecialProduct.scss";
import bucket from "@/assets/icons/bucket.svg";
import leftArrow from "@/assets/icons/left-white-arrow.svg";
import rightArrow from "@/assets/icons/right-white-arrow.svg";
import wishlist from "@/assets/icons/white-wishlist.svg";
import specialPreview from "@/assets/images/special-preview-img.png";
import specialFirst from "@/assets/images/special-first.png";
import specialSub from "@/assets/images/special-sub-img.png";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import { motion } from "framer-motion";
import SpecialProductMenu from "@/components/Sidebar/components/SpecialProductMenu/SpecialProductMenu";

const SpecialProduct = () => {
  return (
    <SideMarginWrapper>
      <div className="special-root">
        <div className="special-left">
          <div className="top-wrapper">
            <div className="special-header-text">
              <p>Clothes</p>
              <p>Designer</p>
            </div>
          </div>
          <motion.div
            className="special-back-wrapper"
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: +100 }}>
            <BackNavigation navigateTo={"special-offer"} pageName={"Back to all offers"} />
          </motion.div>
          <div className="special-left-title">
            <motion.div
              className="special-titles-wrapper"
              initial={{ opacity: 0, x: +100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
              exit={{ opacity: 0, x: +100 }}>
              <p>design by</p>
              <p>#namedesigner</p>
            </motion.div>
            <motion.div
              className="special-wrap"
              initial={{ opacity: 0, x: +100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
              exit={{ opacity: 0, x: +100 }}>
              <h1>
                Who Are You? <br /> Collections
              </h1>
              <p>
                New collections at a special price. Only the first two weeks since the appearance of
                the collection is a special offer.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="special-second">
          <div className="special-sub-images-wrapper">
            <div className="special-col">
              <div className="row">
                <img src={specialPreview} alt="sub-images" />
              </div>
              <div className="row">
                <img src={specialFirst} alt="sub-images" />
              </div>
              <div className="row">
                <img src={specialSub} alt="sub-images" />
              </div>
            </div>
          </div>
        </div>
        <div className="special-right">
          <div className="special-row">
            <motion.div
              className="special-column"
              initial={{ opacity: 0, x: "10%" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: "10%" }}>
              <div className="special-footer special-first">
                <div className="special-overlay"></div>
                <div className="hovered-special">
                  <div className="special-icons-wrapper">
                    <div className="icon-row">
                      <img src={bucket} alt="bucket" />
                    </div>
                    <div className="icon-row">
                      <img src={wishlist} alt="wishlist" />
                    </div>
                  </div>
                </div>
                <div className="special-arrows-wrapper">
                  <img src={leftArrow} alt="" />
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="special-mobile-menu-wrapper">
        <SpecialProductMenu />
      </div>
    </SideMarginWrapper>
  );
};

export default SpecialProduct;
