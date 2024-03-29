import "./Cart.scss";

import deleteIcon from "@/assets/icons/delate-icons.png";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import { products } from "@/db/products";
import { motion } from "framer-motion";
import CartMenu from "@/components/Sidebar/components/CartMenu/CartMenu";

const Cart = () => {
  return (
    <SideMarginWrapper>
      <div className="mobile-cart-back-wrapper">
        <BackNavigation navigateTo={"products"} pageName={"Back to Products"} />
      </div>
      <div className="cart-wrapper">
        <div className="top-wrapper">
          <div className="cart-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="cart-details">
          <h2>Cart</h2>
          <p>Here you can check your order with further confirmation and payment.</p>
          <div className="cart-list">
            <ul className="cart-container">
              {products.map((data) => (
                <motion.li
                  className="cart-row"
                  key={data.id}
                  initial={{ opacity: 0, x: +100 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.1 } }}
                  exit={{ opacity: 0, x: +100 }}>
                  <div className="cart-data">
                    <div className="cart-img-wrapper">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="basic-details">
                      <p>{data.type}</p>
                      <h4>{data.name}</h4>
                      <p>#{data.uniqueCode}</p>
                    </div>
                    <div className="size">
                      <p>Size</p>
                      <h2>{data.size}</h2>
                    </div>
                    <div className="cart-color">
                      <p>Color</p>
                      <div className="color-box"></div>
                    </div>
                    <div className="cart-quantity">
                      <p>Quantity</p>
                      <div className="counter-wrapper">
                        <div className="dec">-</div>
                        <h6>{data.quantity}</h6>
                        <div className="inc">+</div>
                      </div>
                    </div>
                    <div className="cart-price">
                      <p>Cost</p>
                      <h4>{`${data.cost}$`}</h4>
                    </div>
                    <div className="close-box">
                      <img src={deleteIcon} alt="" />
                    </div>
                  </div>
                  <div className="mobile-close-box">
                    <img src={deleteIcon} alt="" />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="cart-back-wrapper">
            <BackNavigation navigateTo={"products"} pageName={"Back to Products"} />
          </div>
        </div>
      </div>
      <div className="mobile-cart-menu">
        <CartMenu />
      </div>
    </SideMarginWrapper>
  );
};

export default Cart;
