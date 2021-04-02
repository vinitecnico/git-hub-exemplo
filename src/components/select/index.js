import React from "react";
import "./styles.scss";

const Select = ({ filterOptions, filterSelected, handleChange }) => {
  return (
    <select
      className="form-select"
      value={filterSelected}
      onChange={handleChange}
    >
      {filterOptions.map((item, index) => (
        <option key={item.label} value={index}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
