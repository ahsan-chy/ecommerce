import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import "./ProductDetails.scss";
import Wishlist from "@/assets/icons/wishlist.svg";
import Bucket from "@/assets/icons/bucket.svg";
import leftArrow from "@/assets/icons/left-black.svg";
import rightArrow from "@/assets/icons/right-black.svg";
import ProductDetailsImg from "@/assets/images/product-details.png";
import specialPreview from "@/assets/images/special-preview-img.png";
import subimg from "@/assets/images/subimg.png";
import subimg2 from "@/assets/images/subimg2.png";
import subimg3 from "@/assets/images/subimg3.png";
import subimg4 from "@/assets/images/subimg4.png";
import subimg5 from "@/assets/images/subimg5.png";
import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const sortBy = [
  { value: "new", label: "New" },
  { value: "sale", label: "Sale" },
];
const gender = [
  { value: "man", label: "Man" },
  { value: "women", label: "Women" },
];
const model = [
  { value: "regular", label: "Regular" },
  { value: "treditional", label: "Treditional" },
];
const color = [
  { value: "white", label: "White" },
  { value: "orange", label: "Orange" },
  { value: "green", label: "Green" },
];
const size = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
  { value: "xxxl", label: "XXXL" },
];

function ProductDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ProductDetailsImg, specialPreview, ProductDetailsImg];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <SideMarginWrapper>
      <div className="product-details-container">
        <div className="breadcrumb-wrapper">
          <Breadcrumb />
        </div>
        <div className="category-title">
          <h2>T-Shirt Collections</h2>
          <p>
            Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give
            you confidence in a big city.
          </p>
        </div>
        <div className="filter-category">
          <FilterDropdown title="Sort By" options={sortBy} />
          <FilterDropdown title="Gender" options={gender} />
          <FilterDropdown title="Model" options={model} />
          <FilterDropdown title="Color" options={color} />
          <FilterDropdown title="Size" options={size} />
        </div>
        <motion.div
          className="products-wrapper"
          initial={{ opacity: 0, x: +100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, x: +100 }}>
          <div className="left-img-wrapper">
            <img src={images[currentIndex]} alt="" />
            <div className="product-arros-wrapper">
              <img src={leftArrow} alt="" onClick={prevSlide} />
              <img src={rightArrow} alt="" onClick={nextSlide} />
            </div>
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
                <h6>Color</h6>
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
        </motion.div>
        <div className="product_details-pagination">
          <PaginationArrows current={0} length={30} />
        </div>
      </div>
    </SideMarginWrapper>
  );
}

export default ProductDetails;
