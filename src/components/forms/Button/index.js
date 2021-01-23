import React from "react";
import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="btn" {...otherProps}>
      {children}
    </div>
  );
};

export default Button;
