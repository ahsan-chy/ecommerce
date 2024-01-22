import "./PaginationArrows.scss";
import RightArrow from "@/assets/icons/right-gray-arrow.svg";
import LeftArrow from "@/assets/icons/left-gray-arrow.svg";

const PaginationArrows = () => {
  return (
    <div>
      <img src={LeftArrow} alt="Leftarraow" />
      <div className="count-wrapper">
        <span>01</span> /<span>30</span>
      </div>
      <img src={RightArrow} alt="rightarrow" />
    </div>
  );
};

export default PaginationArrows;
