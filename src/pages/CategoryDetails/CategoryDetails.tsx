import { useEffect, useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import "./CategoryDetails.scss";
import Arrow from "@/assets/icons/arrow-white.svg";
import { shirtsData } from "@/db/shirtsData";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import { useNavigate } from "react-router";
import ScrollComponent from "@/components/ScrollComponent/ScrollComponent";
import { motion } from 'framer-motion';


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

function CategoryDetails() {
  const navigate = useNavigate();
  
  const [, setScrollY] = useState(0);

  const handleNavigate = () => {
    navigate("/product-details");
  };

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="category-details-container">
      <motion.div
        className="breadcrumb-wrapper"
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: +50 }}>
        <Breadcrumb />
      </motion.div>
      <motion.div
        className="category-title"
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: +50 }}>
        <h2>T-Shirt Collections</h2>
        <p>
          Collection of youth elongated T-shirts with cuffs on the sleeves. Style that will give you
          confidence in a big city.
        </p>
      </motion.div>

      <motion.div
        className="filter-category"
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: +50 }}>
        <FilterDropdown title="Sort By" options={sortBy} />
        <FilterDropdown title="Gender" options={gender} />
        <FilterDropdown title="Model" options={model} />
        <FilterDropdown title="Color" options={color} />
        <FilterDropdown title="Size" options={size} />
      </motion.div>
      <div className="category-wrapper">
        {shirtsData.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, x: +50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } }}
            exit={{ opacity: 0, x: +50 }}>
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
                <button onClick={handleNavigate}>
                  DETAILS
                  <img src={Arrow} alt="products-image" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="scroller-wrapper">
      <ScrollComponent />
      </div>
    </div>
  );
}

export default CategoryDetails;
