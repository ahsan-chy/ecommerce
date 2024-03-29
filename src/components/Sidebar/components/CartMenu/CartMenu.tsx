import "./CartMenu.scss";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";

const CartMenu = () => {
  return (
    <div className="cart-menu-wrapper">
      <div className="cart-menu-details">
        <ul>
          <li>
            <span>Quantity</span>
            <span>5</span>
          </li>
          <li>
            <span>Total</span>
            <span>134.45 $</span>
          </li>
          <li>
            <span>Discount</span>
            <span>-15$</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>To pay</span>
            <span className="cart-total-price">119.48$</span>
          </li>
        </ul>
      </div>
      <button>
        CHECKOUT
        <img src={ArrowWhite} alt="arrow" />
      </button>
    </div>
  );
};

export default CartMenu;
