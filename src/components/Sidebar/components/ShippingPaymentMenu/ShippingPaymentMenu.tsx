import "./ShippingPaymentMenu.scss";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";

const ShippingPaymentMenu = () => {
  return (
    <div className="receipt-menu">
      <div className="receipt-wrappers">
        <h3>Order Details</h3>
        <ul>
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
        <div className="payment-status">
        <ul>
          <li>
            <span>Delivery</span>
            <span>is free</span>
          </li>
        </ul>
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
          <span>To Pay</span>
          <span className="total-price">119.48$</span>
        </div>
      </div>
      <button>
        TO PAY
        <img src={ArrowWhite} alt="arrow" />
      </button>
    </div>
  );
};

export default ShippingPaymentMenu;
