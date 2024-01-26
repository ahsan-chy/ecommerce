import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import "./Receipt.scss";
import BackNavigation from "@/components/BackNavigation/BackNavigation";

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
          <h2>Receipt</h2>
          <p>Specify the delivery address and payment method</p>

          <div className="receipt-box">
            <div className="receipt-left">
              <div className="receipt-wrapper">
                <h4>Clothes Designer</h4>
                <p>creative clothing store</p>

                <div className="receipt-divider"></div>

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
                  <li>
                    <span>T-Shirt</span>
                    <span>52.99$</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>T-Shirt</span>
                    <span>52.99$</span>
                  </li>
                </ul>

                <div className="receipt-divider"></div>
                <div className="discount-row">
                  <span>Discount</span>
                  <span>40.99$</span>
                </div>
                <div className="receipt-divider"></div>
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
                  <span>119.48$</span>
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
            </div>
            <div className="receipt-right">
              <div className="receipt-back-wrapper">
                <BackNavigation navigateTo={"/"} pageName={"Back to home"} />
              </div>

              <h1>Thanks for your order</h1>
              <p>We will ship your order within 2 days.</p>

              <div className="bottom-description">
                <h5>See also</h5>
                <p>See our new products in various product categories</p>
                <div className="receipt-cards-wrapper">
                  <div className="card">
                    <p>Special offer</p>
                    <h4>Urban</h4>
                    <p>Collection of youth elongated T-shirts with cuffs on the sleeves. </p>
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
