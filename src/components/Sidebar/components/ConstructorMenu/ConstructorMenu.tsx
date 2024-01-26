import "./ConstructorMenu.scss";
import ArrowWhite from "@/assets/icons/long-white-arrow.svg";

const ConstructorMenu = () => {
  return (
    <div className="constructor-menu-wrapper">
      <div className="confirm-construct-menu">
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
    </div>
  );
};

export default ConstructorMenu;
