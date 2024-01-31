import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import "./SpecialOffer.scss";
import bucket from "@/assets/icons/bucket.svg";
import wishlist from "@/assets/icons/white-wishlist.svg";
import arrow from "@/assets/icons/arrow-white-small.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const SpecialOffer = () => {
  const navigate = useNavigate();

  return (
    <div className="offer-root">
      <div className="offer-left">
        <div className="top-wrapper">
          <div className="offer-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="offer-left-title">
          <motion.div
            className="offer-wrap"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: +100 }}>
            <h1>Special Offer</h1>
            <p>
              New collections at a special price. Only the first two weeks since the appearance of
              the collection is a special offer.
            </p>
          </motion.div>
          <motion.div
            className="offer-pagination"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
            exit={{ opacity: 0, y: +100 }}>
            <PaginationArrows current={"0"} length={"30"} />
          </motion.div>
        </div>
      </div>

      <div className="offer-right">
        <div className="offer-row">
          <motion.div
            className="offer-column"
            initial={{ opacity: 0, x: "40%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: "40%" }}>
            <div className="offer-footer offer-first">
              <div className="offer-content">
                <p>Special Offer</p>
                <h3>Style Who?</h3>
                <p>
                  Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will{" "}
                </p>
              </div>
              <div className="offer-overlay"></div>
              <div className="hovered-offer">
                <div className="offer-icons-wrapper">
                  <div className="icon-row">
                    <img src={bucket} alt="bucket" />
                  </div>
                  <div className="icon-row">
                    <img src={wishlist} alt="wishlist" />
                  </div>
                  <div className="icon-row" onClick={() => navigate("/special-product")}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="offer-column"
            initial={{ opacity: 0, x: "40%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
            exit={{ opacity: 0, x: "40%" }}>
            <div className="offer-footer offer-second">
              <div className="offer-content">
                <p>Urban</p>
                <h3>Style Who?</h3>
                <p>
                  Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will{" "}
                </p>
              </div>
              <div className="offer-overlay"></div>

              <div className="hovered-offer">
                <div className="offer-icons-wrapper">
                  <div className="icon-row">
                    <img src={bucket} alt="bucket" />
                  </div>
                  <div className="icon-row">
                    <img src={wishlist} alt="wishlist" />
                  </div>
                  <div className="icon-row" onClick={() => navigate("/special-product")}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="offer-column last-offer"
            initial={{ opacity: 0, x: "40%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
            exit={{ opacity: 0, x: "40%" }}>
            <div className="offer-footer offer-third">
              <div className="offer-content ">
                <p>Modern</p>
                <h3>Style Who?</h3>
                <p>
                  Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will{" "}
                </p>
              </div>
              <div className="offer-overlay"></div>

              <div className="hovered-offer">
                <div className="offer-icons-wrapper">
                  <div className="icon-row">
                    <img src={bucket} alt="bucket" />
                  </div>
                  <div className="icon-row">
                    <img src={wishlist} alt="wishlist" />
                  </div>
                  <div className="icon-row" onClick={() => navigate("/special-product")}>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
