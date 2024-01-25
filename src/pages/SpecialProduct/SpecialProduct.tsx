import "./SpecialProduct.scss";
import bucket from "@/assets/icons/bucket.svg";
import wishlist from "@/assets/icons/white-wishlist.svg";
import specialPreview from "@/assets/images/special-preview-img.png";
import specialFirst from "@/assets/images/special-first.png";
import specialSub from "@/assets/images/special-sub-img.png";
import BackNavigation from "@/components/BackNavigation/BackNavigation";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";

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
          <div className="special-back-wrapper">
            <BackNavigation navigateTo={"special-offer"} pageName={"Back to all offers"} />
          </div>
          <div className="special-left-title">
            <div className="special-titles-wrapper">
              <p>design by</p>
              <p>#namedesigner</p>
            </div>
            <div className="special-wrap">
              <h1>Who Are You? Collections</h1>
              <p>
                New collections at a special price. Only the first two weeks since the appearance of
                the collection is a special offer.
              </p>
            </div>
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
            <div className="special-column">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default SpecialProduct;
