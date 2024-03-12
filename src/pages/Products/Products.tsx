import { productsData } from "@/db/productsData";
import "./Products.scss";
import ProductTopImg from "@/assets/images/For-Photo.png";
import Arrow from "@/assets/icons/Arrow.svg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Products = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/category-details");
  };

  return (
    <motion.div className="products-container">
      {/* //* Left */}
      <div className="products-left-wrapper">
        <div className="products-header-text">
          <p>Clothes</p>
          <p>Designer</p>
        </div>

        <div className="products-left-title">
          <h2>All Clothes</h2>
          <p>
            Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give
            you confidence in a big city.{" "}
          </p>
        </div>
      </div>
      {/* //* Right */}
      <div className="products-right-wrapper">
        <div className="right-top-box-wrapper">
          <div className="right-top-text-wrapper">
            <p>Special offer</p>
            <h3>Style Woo</h3>
            <p>Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will</p>
          </div>
          <div className="right-top-img-wrapper">
            <motion.div
              className="right-products-wrapper"
              initial={{ opacity: 0, x: +100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: +100 }}>
              <img src={ProductTopImg} alt="products-image" />
              <button>
                SEE ALL
                <img src={Arrow} alt="products-image" />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="mobile-products-left-title">
          <h2>All Clothes</h2>
          <p>
            Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give
            you confidence in a big city.{" "}
          </p>
        </div>

        <motion.div
          className="product-category-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}>
          <div className="products-wrapper">
            {productsData.slice(0, 4).map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrapper">
                  <img src={`${product.img}`} alt="img" />
                </div>
                <div className="divider-products"></div>
                <div className="title" onClick={handleNavigate}>
                  <p>{product.name}</p>
                  <img src={Arrow} alt="products-image" />
                </div>
              </div>
            ))}
          </div>
          <div className="products-wrapper">
            {productsData.slice(4, 9).map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrapper">
                  <img src={`${product.img}`} alt="img" />
                </div>
                <div className="divider-products"></div>
                <div className="title" onClick={handleNavigate}>
                  <p>{product.name}</p>
                  <img src={Arrow} alt="products-image" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Products;
