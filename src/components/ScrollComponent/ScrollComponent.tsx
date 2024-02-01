import Cart from "@/assets/icons/scroll-arrow.svg";
import "./ScrollComponent.scss";

const ScrollComponent = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-circle"></div>
      <img src={Cart} className="rotate-img" />
    </div>
  );
};

export default ScrollComponent;
