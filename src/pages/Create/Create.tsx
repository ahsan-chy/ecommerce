import Arrow from "@/assets/icons/Arrow.svg";
import CreateShirt from "@/assets/images/create-shirt.png";
import "./Create.scss";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Create = () => {
  const navigate = useNavigate();

  return (
    <SideMarginWrapper>
      <div className="create-wrapper">
        <div className="top-wrapper">
          <div className="products-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="creater-box">
          <motion.div
            className="create-left"
            initial={{ opacity: 0, y: +100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: +100 }}>
            <div className="create-text-image">
              <h1>Create</h1>
              <motion.img
                src={CreateShirt}
                alt=""
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
                exit={{ opacity: 0, y: +50 }}
              />
            </div>
            <div className="description-wrapper">
              <p>
                Create your T-shirt based on our unpublished designs, and if your design is cool and
                collects the greatest number of likes, we will release a new collection, and we will
                do it for you for free.
              </p>
              <div className="description-btns">
                <button onClick={() => navigate("/construct")}>CONSTRUCTOR</button>
                <button className="view-btn">
                  VIEW NOMINEES
                  <img src={Arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Create;
