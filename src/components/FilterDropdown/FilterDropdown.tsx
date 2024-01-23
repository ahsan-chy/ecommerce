import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./FilterDropdown.scss";

interface FilterDropdownProps {
  title: string;
  options: { value: string; label: string }[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, options }) => {
  return (
    <div className="filter-wrapper">
      <p>{title || "Title"}: </p>
      <div className="dropdown-wrapper">
        <CustomSelect options={options} />
      </div>
    </div>
  );
};

export default FilterDropdown;
