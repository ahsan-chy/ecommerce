import "./Construct.scss";
import CreateShirt from "@/assets/images/create-shirt.png";
import subimg from "@/assets/images/subimg.png";
import subimg2 from "@/assets/images/subimg2.png";
import subimg3 from "@/assets/images/subimg3.png";
import subimg4 from "@/assets/images/subimg4.png";
import subimg5 from "@/assets/images/subimg5.png";
import design from "@/assets/images/design.png";
import design2 from "@/assets/images/design2.png";
import design3 from "@/assets/images/design3.png";
import design4 from "@/assets/images/design4.png";
import design5 from "@/assets/images/design5.png";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import { motion } from "framer-motion";

const Construct = () => {
  return (
    <SideMarginWrapper>
      <div className="construct-wrapper">
        <div className="top-wrapper">
          <div className="products-header-text">
            <p>Clothes</p>
            <p>Designer</p>
          </div>
        </div>
        <div className="constructor-description">
          <div className="left-constructor">
            <motion.div
              className="constructor-img-wrapper"
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.78, delay: 0.2 } }}
              >
              <img src={CreateShirt} alt="Create-Shirt" />
            </motion.div>
            <div className="pagination-box">
              <PaginationArrows current={"0"} length={"30"} />
            </div>
          </div>
          <div className="right-constructor">
            <motion.div
              className="constructor-details"
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.78 } }}
              >
              <h3>Design Constructor</h3>
              <p>
                Design your clothes using the colors. Choose a preview for the presentation and send
                it to the contest.
              </p>

              <div className="color-section">
                <h4>T-Shirt Color</h4>
                <p>Create the color of your shirt</p>

                <div className="colors-row">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="design-section">
                <h4>Design</h4>
                <p>Apply design, Use our section, or load your</p>
                <div className="images-row">
                  <div className="design-image-wrapper">
                    <img src={design} alt="sub-item" />
                  </div>
                  <div className="design-image-wrapper">
                    <img src={design2} alt="sub-item" />
                  </div>
                  <div className="design-image-wrapper">
                    <img src={design3} alt="sub-item" />
                  </div>
                  <div className="design-image-wrapper">
                    <img src={design4} alt="sub-item" />
                  </div>
                  <div className="design-image-wrapper">
                    <img src={design5} alt="sub-item" />
                  </div>
                </div>
              </div>
              <div className="preview-section">
                <div className="divider"></div>
                <h4>Preview</h4>
                <p>Apply design, Use our section, or load your</p>
                <div className="images-row">
                  <div className="preview-image-wrapper">
                    <img src={subimg} alt="sub-item" />
                  </div>
                  <div className="preview-image-wrapper">
                    <img src={subimg2} alt="sub-item" />
                  </div>
                  <div className="preview-image-wrapper">
                    <img src={subimg3} alt="sub-item" />
                  </div>
                  <div className="preview-image-wrapper">
                    <img src={subimg4} alt="sub-item" />
                  </div>
                  <div className="preview-image-wrapper">
                    <img src={subimg5} alt="sub-item" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Construct;
