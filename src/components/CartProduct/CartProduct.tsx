import "./CartProduct.scss";
import deleteIcon from "@/assets/icons/delate-icons.png";
import CartImg from "@/assets/images/CartImg.png";

const CartProduct = () => {
  return (
    <div className="cart-card-wrapper">
      <div className="cart-close-box">
        <img src={deleteIcon} alt="" />
      </div>
      <div className="left-card-img">
        <img src={CartImg} alt="" />
      </div>
      <div className="right-cart-description">
        <p>Name Products</p>
        <h2>Unknown Black</h2>
        <p>#230356</p>
        <div className="cart-options">
          <div className="size">
            <p>Size</p>
            <h2>M</h2>
          </div>
          <div className="cart-color">
            <p>Color</p>
            <div className="color-box"></div>
          </div>
          <div className="cart-quantity">
            <p>Quantity</p>
            <div className="counter-wrapper">
              <div className="dec">-</div>
              <h6>1</h6>
              <div className="inc">+</div>
            </div>
          </div>
          <div className="cart-price">
            <p>Cost</p>
            <h4>52.99$</h4>
          </div>
        </div>
        <p>
          Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give you
          confidence in a big city.
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
