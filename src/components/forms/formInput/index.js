import React from "react";
import "./styles.scss";

const FormInput = ({ handleChange, label, ...outherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <input
        className="formInput"
        onChange={handleChange}
        {...outherProps}
      ></input>
    </div>
  );
};

export default FormInput;
