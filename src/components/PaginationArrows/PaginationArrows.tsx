import React from "react";
import "./PaginationArrows.scss";
import RightArrow from "@/assets/icons/right-gray-arrow.svg";
import LeftArrow from "@/assets/icons/left-gray-arrow.svg";

interface PaginationArrowsProps {
  current: string;
  length: string;
  handleLeftClick?: () => void;
  handleRightClick?: () => void;
}

const PaginationArrows: React.FC<PaginationArrowsProps> = (props) => {
  const {
    current = "0",
    length = "30",
    handleLeftClick = () => {},
    handleRightClick = () => {},
  } = props;

  return (
    <div className="pagination-wrapper">
      <img src={LeftArrow} alt="LeftArrow" onClick={handleLeftClick} />
      <div className="count-wrapper">
        <span>{current}</span> / <span>{length}</span>
      </div>
      <img src={RightArrow} alt="RightArrow" onClick={handleRightClick} />
    </div>
  );
};

export default PaginationArrows;
