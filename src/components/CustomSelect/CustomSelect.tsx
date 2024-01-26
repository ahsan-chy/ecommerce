import { useState } from "react";
import "./CustomSelect.scss";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  filterType?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, filterType }) => {
  const [selectedOption, setSelectedOption] = useState((options && options[0]?.value) || "Select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };
  return (
    <div className={`custom-select ${isDropdownOpen ? "open" : ""}`}>
      <div
        className={`select-header ${filterType === "default" ? "default-filter" : ""}`}
        onClick={toggleDropdown}>
        <label>{selectedOption}</label>
        <span className="arrow">&#9662;</span>
      </div>
      {isDropdownOpen && (
        <div className="options">
          {options?.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption === option.value ? "selected" : ""}`}
              onClick={() => handleSelectChange(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
