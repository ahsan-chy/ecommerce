/* eslint-disable @typescript-eslint/no-explicit-any */
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
import eye from "@/assets/icons/eye.svg";
import leftAdd from "@/assets/icons/left-add.svg";
import add from "@/assets/icons/add.svg";
import rightAdd from "@/assets/icons/right-add.svg";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import PaginationArrows from "@/components/PaginationArrows/PaginationArrows";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeMenu from "@/components/Sidebar/components/HomeMenu/HomeMenu";
import ConstructorMenu from "@/components/Sidebar/components/ConstructorMenu/ConstructorMenu";

interface SelectedDesign {
  id: number;
  src: string;
  selected: boolean;
}
interface SelectedPreview {
  id: number;
  src: string;
  selected: boolean;
}

const defaultColors = [
  { id: 1, colorCode: "#11a5f1", selected: false },
  { id: 2, colorCode: "#ff6347", selected: false },
  { id: 3, colorCode: "#7fff00", selected: false },
  { id: 4, colorCode: "#ffd700", selected: false },
  { id: 5, colorCode: "#ff69b4", selected: false },
  { id: 6, colorCode: "#40e0d0", selected: false },
  { id: 7, colorCode: "#9370db", selected: false },
  { id: 8, colorCode: "#008080", selected: false },
  { id: 9, colorCode: "#ffa07a", selected: false },
];
const defaultImages = [
  { id: 1, src: design, selected: false },
  { id: 2, src: design2, selected: false },
  { id: 3, src: design3, selected: false },
  { id: 4, src: design4, selected: false },
  { id: 5, src: design5, selected: false },
];
const defaultPreviews = [
  { id: 1, src: subimg, selected: false },
  { id: 2, src: subimg2, selected: false },
  { id: 3, src: subimg3, selected: false },
  { id: 4, src: subimg4, selected: false },
  { id: 5, src: subimg5, selected: false },
];

const AddDesignBtns = () => {
  return (
    <div className="add-design-btns">
      <div className="left-add">
        <img src={leftAdd} alt="leftAdd" />
      </div>
      <div className="add">
        <img src={add} alt="add" />
      </div>
      <div className="right-add">
        <img src={rightAdd} alt="rightAdd" />
      </div>
    </div>
  );
};

const Construct = (props: { handleActive: any; selectedCollections: any }) => {
  const { handleActive, selectedCollections } = props;
  const categories = ["T-Shirt", "Hoodie", "Long sleeve"];

  const [colors, setColors] = useState(defaultColors);
  const [images, setImages] = useState(defaultImages);
  const [previews, setPreviews] = useState(defaultPreviews);
  const [selectedDesign] = useState<SelectedDesign | null>(null);
  const [selectedPreview] = useState<SelectedPreview | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const handleCategoryClick = (subCategory: string) => {
    setActiveCategory(subCategory);
  };

  const handleColorChange = (selectedColorId: number) => {
    const updatedColors = colors.map((color) => {
      if (color.id === selectedColorId) {
        return { ...color, selected: true };
      } else {
        return { ...color, selected: false };
      }
    });
    setColors(updatedColors);
  };

  const handleImageDesign = (selectedImage: number) => () => {
    const updatedImages = images.map((image) => {
      if (image.id === selectedImage) {
        // setSelectedDesign(image);
        return { ...image, selected: true };
      } else {
        return { ...image, selected: false };
      }
    });
    setImages(updatedImages);
  };
  const handlePreview = (selectedPrev: number) => () => {
    const updatedPrev = previews.map((prev) => {
      if (prev.id === selectedPrev) {
        // setSelectedPreview(prev);
        return { ...prev, selected: true };
      } else {
        return { ...prev, selected: false };
      }
    });
    setPreviews(updatedPrev);
  };
  return (
    <>
      <SideMarginWrapper>
        <div className="construct-wrapper">
          <div className="top-wrapper">
            <div className="products-header-text">
              <p>Clothes</p>
              <p>Designer</p>
            </div>
          </div>
          <div className="construct-top-menu">
            <HomeMenu collectionNav={selectedCollections} handleActive={handleActive} />
          </div>
          <div className="mobile-category-wrappers">
            {categories.map((subCategory) => (
              <button
                key={subCategory}
                className={
                  activeCategory === subCategory
                    ? "active-mobile-cat-btn"
                    : "deActive-mobile-cat-btn"
                }
                onClick={() => handleCategoryClick(subCategory)}>
                {subCategory}
              </button>
            ))}
          </div>
          <div className="preview-button">
            <img src={eye} alt="preview-eye" />
            <span>Preview</span>
          </div>

          <div className="constructor-description">
            <div className="left-constructor">
              <motion.div
                className="constructor-img-wrapper"
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.78, delay: 0.2 } }}>
                <img src={CreateShirt} alt="Create-Shirt" />
                <div className="design-div">
                  {selectedDesign && <img src={selectedDesign?.src} className="" />}
                </div>
                <div className="preview-div">
                  {selectedPreview && <img src={selectedPreview?.src} className="" />}
                </div>
              </motion.div>
              <div className="pagination-box">
                <PaginationArrows current={0} length={30} />
              </div>
            </div>
            <div className="right-constructor">
              <motion.div
                className="constructor-details"
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.78 } }}>
                <h3>Design Constructor</h3>
                <p>
                  Design your clothes using the colors. Choose a preview for the presentation and
                  send it to the contest.
                </p>

                <div className="color-section">
                  <h4>T-Shirt Color</h4>
                  <p>Create the color of your shirt</p>
                  <div className="colors-row">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className={`color-block ${color.selected ? "color-selected" : ""}`}
                        style={{ backgroundColor: color.colorCode }}
                        onClick={() => handleColorChange(color.id)}></div>
                    ))}
                  </div>
                </div>
                <div className="divider"></div>
                <>
                  <div className="design-section">
                    <h4>Design</h4>
                    <p>Apply design, Use our section, or load your</p>
                    <div className="images-row">
                      {images.map((image) => (
                        <div
                          className={`design-image-wrapper  ${
                            image.selected ? "image-selected" : ""
                          }`}
                          onClick={handleImageDesign(image.id)}
                          key={image.id}>
                          <img src={image.src} alt={`sub-item ${image.id}`} />
                        </div>
                      ))}
                      <AddDesignBtns />
                    </div>
                  </div>
                </>
                <div className="preview-section">
                  <div className="divider"></div>
                  <h4>Preview</h4>
                  <p>Apply design, Use our section, or load your</p>
                  <div className="images-row">
                    {previews.map((prev) => (
                      <div
                        className={`preview-image-wrapper ${prev.selected ? "prev-selected" : ""}`}
                        onClick={handlePreview(prev.id)}
                        key={prev.id}>
                        <img src={prev.src} alt={`sub-item ${prev.id}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="mobile-pagination-box">
                <PaginationArrows current={0} length={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-cart-btns-wrapper">
          <ConstructorMenu />
        </div>
      </SideMarginWrapper>
    </>
  );
};

export default Construct;
