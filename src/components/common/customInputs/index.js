import React from "react";
import PropTypes from "prop-types";
import "./index.css";
const CustomInput = ({
  backgroundColor,
  borderRadius,
  border,
  focusBorderColor,
  ...restProps
}) => {
  const inputStyle = {
    backgroundColor,
    borderRadius,
    border,
    padding: "10px",
    width: "100%",
    transition: "border-color 0.3s ease", // Add transition for smoother effect
  };

  return <input style={inputStyle} {...restProps} />;
};

CustomInput.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  focusBorderColor: PropTypes.string, // New prop for focus border color
};

CustomInput.defaultProps = {
  backgroundColor: "transparent",
  borderRadius: "4px",
  border: "1px solid #ccc",
  focusBorderColor: "#00cc00", // Default focus border color
};

export default CustomInput;
