import React from "react";
import "../App.css";

const Button = ({ onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <div className="buttonText">Next</div>
    </div>
  );
};

export default Button;
