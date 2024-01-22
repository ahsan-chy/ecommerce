import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import "./CategoryDetails.scss";
import Arrow from "@/assets/icons/arrow-white.svg";
import { shirtsData } from "@/db/shirtsData";

function CategoryDetails() {
  return (
    <div className="category-details-container">
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
      <div className="category-wrapper">
        {shirtsData.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.img} alt="" />
            </div>
            <div className="details-wrapper">
              <button className="new-btn">New</button>
              <p>{product.category}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-footer">
                <h3>{product.price}</h3>
                <button>
                  DETAILS
                  <img src={Arrow} alt="products-image" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetails;
