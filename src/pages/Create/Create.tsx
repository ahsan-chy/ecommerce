import Arrow from "@/assets/icons/Arrow.svg";
import "./Create.scss";


const Create = () => {
  return (
    <div className="create-wrapper">
      <div className="top-wrapper">
        <div className="products-header-text">
          <p>Clothes</p>
          <p>Designer</p>
        </div>
      </div>
      <div className="creater-box">
        <div className="create-left">
            <h1>Create</h1>
            <div className="description-wrapper">
                <p>
                Create  your T-shirt based on our unpublished designs, and if your design is cool and collects the greatest number of likes, we will release a new collection, and we will do it for you for free.
                </p>
                <div className="description-btns">
                <button>CONSTRUCTOR</button>
                <button className="view-btn">VIEW  NOMINEES
                    <img src={Arrow} alt="arrow" />
                </button>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
