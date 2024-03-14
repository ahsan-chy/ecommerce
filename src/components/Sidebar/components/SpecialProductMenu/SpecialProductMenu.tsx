import "./SpecialProductMenu.scss";
import { motion } from "framer-motion";

import bucket from "@/assets/icons/bucket.svg";
import wishlist from "@/assets/icons/white-wishlist.svg";

const SpecialProductMenu = () => {
  return (
    <motion.div
      className="product-menu-wrapper"
      initial={{ opacity: 0, x: +100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
      exit={{ opacity: 0, x: +100 }}>
      <div className="varients">
        <div className="row">
          <div className="col">
            <h6>Color</h6>
            <ul className="color-wrapper">
              <li>
                <div className="color-box"></div>
              </li>
              <li>
                <div className="color-box"></div>
              </li>
              <li>
                <div className="color-box"></div>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6>Size</h6>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>2XL</li>
            </ul>
          </div>
        </div>
        <h2>$52.99</h2>
      </div>
      <button className="desktop-buy-btn">BUY NOW</button>
      <div className="mobile-buy-btn-wrapper">
        <div className="buy-btns-wrapper">
          <div className="buy-btn">BUY NOW</div>
          <div className="bucket">
            <img src={bucket} alt="" />
          </div>
          <div className="wishlist">
            <img src={wishlist} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialProductMenu;
