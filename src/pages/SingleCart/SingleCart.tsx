import "./SingleCart.scss";

import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import CartProduct from "@/components/CartProduct/CartProduct";
import SingleCartMenu from "@/components/Sidebar/components/SingleCartMenu/SingleCartMenu";

const SingleCart = () => {
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

          <CartProduct />

          <div className="cart-back-wrapper">
            <BackNavigation navigateTo={"products"} pageName={"Back to Products"} />
          </div>
        </div>
      </div>
      <div className="single-cart-menu">
        <SingleCartMenu />
      </div>
    </SideMarginWrapper>
  );
};

export default SingleCart;
