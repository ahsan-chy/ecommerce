import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./FilterDropdown.scss";

interface FilterDropdownProps {
  title: string;
  required?: boolean;
  options: { value: string; label: string }[];
  filterType?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  required,
  options,
  filterType,
}) => {
  return (
    <>
      {filterType !== "default" ? (
        <div className="filter-wrapper">
          <p>
            {title || "Title"}:
          </p>
          <div className="dropdown-wrapper">
            <CustomSelect options={options} />
          </div>
        </div>
      ) : (
        <div className="default">
          <p>
            {title || "Title"}: {required === true && <span>*</span>}
          </p>
          <div className="dropdown-wrapper">
            <CustomSelect options={options} filterType={filterType} />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterDropdown;
