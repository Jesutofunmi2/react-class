import React from "react";

const Button = ({ text = "Submit", action = () => {} }) => {
  return (
    <div>
      <button
        onClick={action}
        style={{ borderRadius: "12px", color: "#030dddff", background: "#fff" }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;


// Route, Router, Navigation, hooks: useEffect, Components
