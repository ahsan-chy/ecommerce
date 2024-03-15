import React from "react";
import "./PaginationArrows.scss";
import RightArrow from "@/assets/icons/right-gray-arrow.svg";
import LeftArrow from "@/assets/icons/left-gray-arrow.svg";

interface PaginationArrowsProps {
  current: number;
  length: number;
  onPrev?: () => void;
  onNext?: () => void;
}

const PaginationArrows: React.FC<PaginationArrowsProps> = (props) => {
  const { current = 0, length = 30, onPrev = () => {}, onNext = () => {} } = props;

  return (
    <div className="pagination-wrapper">
      <img src={LeftArrow} alt="LeftArrow" onClick={onPrev} />
      <div className="count-wrapper">
        <span>{current}</span> / <span>{length}</span>
      </div>
      <img src={RightArrow} alt="RightArrow" onClick={onNext} />
    </div>
  );
};

export default PaginationArrows;
