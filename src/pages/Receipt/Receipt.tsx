import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import "./Receipt.scss";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import { motion } from "framer-motion";

const Receipt = () => {
  return (
    <SideMarginWrapper>
      <div className="receipt-wrapper">
        <div className="top-wrapper">
          <div className="receipt-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="receipt-details">
          <motion.h2
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: "-10%" }}>
            Receipt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: "-10%" }}>
            Specify the delivery address and payment method
          </motion.p>

          <div className="receipt-box">
            <motion.div
              className="receipt-left"
              initial={{ opacity: 0, x: "-30%" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
              exit={{ opacity: 0, x: "-30%" }}>
              <div className="receipt-wrapper-left">
                <h4>Clothes Designer</h4>
                <p>creative clothing store</p>

                <div></div>

                <ul className="top-divider">
                  <li>
                    <span>T-Shirt</span>
                    <span>x 1</span>
                    <span>52.99$</span>
                  </li>
                  <li>
                    <span>T-Shirt</span>
                    <span>x 1</span>
                    <span>52.99$</span>
                  </li>
                  <li>
                    <span>T-Shirt</span>
                    <span>x 1</span>
                    <span>52.99$</span>
                  </li>
                  <li>
                    <span>T-Shirt</span>
                    <span>x 1</span>
                    <span>52.99$</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Delivery</span>
                    <span>Free</span>
                  </li>
                </ul>

                <div className="discount-row">
                  <span>Discount</span>
                  <span>40.99$</span>
                </div>
                <div className="payment-type">
                  <ul>
                    <li>
                      <span>Payment Method</span>
                      <span>Bank Card</span>
                    </li>
                    <li>
                      <span>Shipping Data</span>
                      <span>Indicated</span>
                    </li>
                  </ul>
                </div>
                <div className="total-charges">
                  <span>Paid</span>
                  <span className="total-price">119.48$</span>
                </div>
                <div className="receipt-double-divider"></div>
                <div className="receipt-double-divider"></div>
                <div className="qr-code-box">
                  <div className="qr-code">
                    <img src="" alt="" />
                  </div>
                  <p>THANK YOU FOR YOUR PURCHASE</p>
                </div>
              </div>
            </motion.div>
            <div className="receipt-right">
              <motion.div
                className="receipt-back-wrapper"
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, x: "-10%" }}>
                <BackNavigation navigateTo={"/"} pageName={"Back to home"} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                exit={{ opacity: 0, x: "-10%" }}>
                Thanks for your order
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                exit={{ opacity: 0, x: "-10%" }}>
                We will ship your order within 2 days.
              </motion.p>

              <div className="bottom-description">
                <motion.h5
                  initial={{ opacity: 0, x: "-10%" }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                  exit={{ opacity: 0, x: "-10%" }}>
                  See also
                </motion.h5>
                <motion.p
                  initial={{ opacity: 0, x: "-10%" }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                  exit={{ opacity: 0, x: "-10%" }}>
                  See our new products in various product categories
                </motion.p>
                <div className="offer-right">
                  <div className="offer-row">
                    <motion.div
                      className="offer-column"
                      initial={{ opacity: 0, x: "-40%" }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
                      exit={{ opacity: 0, x: "-40%" }}>
                      <div className="offer-footer offer-first">
                        <div className="offer-content">
                          <p>Special Offer</p>
                          <h3>Style Who?</h3>
                          <p>Collection of youth elongated T-shirts with cuffs on the sleeves.</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="offer-column"
                      initial={{ opacity: 0, x: "-40%" }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                      exit={{ opacity: 0, x: "-40%" }}>
                      <div className="offer-footer offer-second">
                        <div className="offer-content">
                          <p>Urban</p>
                          <h3>Style Who?</h3>
                          <p>Collection of youth elongated T-shirts with cuffs on the sleeves.</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="offer-column"
                      initial={{ opacity: 0, x: "-40%" }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
                      exit={{ opacity: 0, x: "-40%" }}>
                      <div className="offer-footer offer-third">
                        <div className="offer-content ">
                          <p>Modern</p>
                          <h3>Style Who?</h3>
                          <p>Collection of youth elongated T-shirts with cuffs on the sleeves.</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="offer-column"
                      initial={{ opacity: 0, x: "-40%" }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                      exit={{ opacity: 0, x: "-40%" }}>
                      <div className="offer-footer offer-forth">
                        <div className="offer-content ">
                          <p>Modern</p>
                          <h3>Style Who?</h3>
                          <p>Collection of youth elongated T-shirts with cuffs on the sleeves.</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Receipt;
