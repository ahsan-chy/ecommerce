import { productsData } from "@/db/productsData";
import "./Products.scss";
import ProductTopImg from "@/assets/images/For-Photo.png";
import Arrow from "@/assets/icons/Arrow.svg";

const Products = () => {
  console.log("products", productsData);
  return (
    <div className="products-container">
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
            <img src={ProductTopImg} alt="products-image" />
            <button>
              SEE ALL
              <img src={Arrow} alt="products-image" />
            </button>
          </div>
        </div>

        <div className="products-wrapper">
          {productsData.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={`${product.img}`} alt="img" />
              <div className="divider"></div>
              <div className="title">
                <p>{product.name}</p>
                <img src={Arrow} alt="products-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
