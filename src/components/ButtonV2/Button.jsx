import React from "react";

const Button = ({ colorParams, bgColor, action = () => {}, text , style, type,}) => {
  return (
    <button className={style}
    type={type}
    style={{ background: bgColor, color: colorParams, margin: "5px" }} 
    onClick={action}>
      {text}
    </button>
  );
};

export default Button;
