import "./ConstructorMenu.scss";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const ConstructorMenu = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="constructor-menu-wrapper"
      initial={{ opacity: 0, x: +100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, x: +100 }}>
      <div className="confirm-construct-menu" onClick={() => navigate("/confirm-construct")}>
        <h3>
          To Vote
          <img src={ArrowWhite} alt="" />
        </h3>
        <p>Publish for the "Design Months" </p>
      </div>
      <div className="confirm-construct-menu">
        <h3>
          Add to Cart
          <img src={ArrowWhite} alt="" />
        </h3>
        <p>Checkout created t-shirt </p>
      </div>
    </motion.div>
  );
};

export default ConstructorMenu;
