import React from "react";
import "./TextInput.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, required, ...rest }) => {
  return (
    <div className="inputs-wrapper">
      <label>
        {label || ""} {required === true && <span>*</span>}
      </label>
      <input {...rest} />
    </div>
  );
};

export default Input;
