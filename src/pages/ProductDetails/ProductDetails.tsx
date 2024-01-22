import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import "./ProductDetails.scss";
import Wishlist from "@/assets/icons/wishlist.svg";
import Bucket from "@/assets/icons/bucket.svg";
import ProductDetailsImg from "@/assets/images/product-details.png";
import subimg from "@/assets/images/subimg.png";
import subimg2 from "@/assets/images/subimg2.png";
import subimg3 from "@/assets/images/subimg3.png";
import subimg4 from "@/assets/images/subimg4.png";
import subimg5 from "@/assets/images/subimg5.png";

function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="breadcrumb-wrapper">
        <Breadcrumb />
      </div>
      <div className="category-title">
        <h2>T-Shirt Collections</h2>
        <p>
          Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give you
          confidence in a big city.
        </p>
      </div>
      {/* <div className="filter-category">
        <div className="filter-title">Sort</div>
        <div className="dropdown">

        </div>
      </div> */}
      <div className="products-wrapper">
        <div className="left-img-wrapper">
          <img src={ProductDetailsImg} alt="" />
        </div>
        <div className="right-product-details-wrapper">
          <p>Man Collections</p>
          <h2>Gradient Collection</h2>
          <p>
            Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give
            you confidence in a big city.
          </p>
          <div className="row">
            <div className="col">
              <h6>Size</h6>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
                <li>3XL</li>
              </ul>
            </div>
            <div className="col">
              <h6>Size</h6>
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
                <li>
                  <div className="color-box"></div>
                </li>
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
          </div>
          <div className="other-section">
            <h6>Other Preview</h6>
            <div className="images-wrapper">
              <div className="preview-img">
                <img src={subimg} alt="" />
              </div>
              <div className="preview-img">
                <img src={subimg2} alt="" />
              </div>
              <div className="preview-img">
                <img src={subimg3} alt="" />
              </div>
              <div className="preview-img">
                <img src={subimg4} alt="" />
              </div>
              <div className="preview-img">
                <img src={subimg5} alt="" />
              </div>
            </div>
          </div>
          <div className="buy-wrapper">
            <h2>$52.99</h2>
            <div className="buy-btns-wrapper">
              <div className="buy-btn">BUY NOW</div>
              <div className="bucket">
                <img src={Bucket} alt="" />
              </div>
              <div className="wishlist">
                <img src={Wishlist} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
