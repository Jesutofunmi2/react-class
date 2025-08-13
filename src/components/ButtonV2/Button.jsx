import React from "react";

const Button = ({ colorParams, bgColor, action = () => {}, text , style}) => {
  return (
    <button className={style}
    style={{ background: bgColor, color: colorParams, margin: "5px" }} 
    onClick={action}>
      {text}
    </button>
  );
};

export default Button;
