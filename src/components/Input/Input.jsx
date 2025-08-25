import React from "react";

const Input = ({
  type = "text",
  placeholder = "Anything",
  label = "Free",
  required = false,
  name = "default",
  onChange = () => {},
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
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
