import React from "react";

const Input = ({
  type = "text",
  placeholder = "Anything",
  label = "Free",
  required = false,
  name = "default",
  onKeyUp= () => {},
}) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <label>{label}: </label>
      <input
        name={name}
        type={type}
        style={{ width: "200px", height: "30px" }}
        placeholder={placeholder}
        required={required}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Input;
