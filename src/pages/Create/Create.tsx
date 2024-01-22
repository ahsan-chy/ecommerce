import Arrow from "@/assets/icons/Arrow.svg";
import CreateShirt from "@/assets/images/create-shirt.png";
import "./Create.scss";
import SideMarginWrapper from "@/components/SideMarginWrapper/SideMarginWrapper";
import { useNavigate } from "react-router";

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
          <div className="create-left">
            <div className="create-text-image">
              <h1>Crea</h1>
              <img src={CreateShirt} alt="" />
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
          </div>
        </div>
      </div>
    </SideMarginWrapper>
  );
};

export default Create;
