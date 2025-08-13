import React from 'react'

const Input = ({ type="text", placeholder="Anything", label="Free", required=false}) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
    <label>{label}: </label>
    <input type={type} style={{ width: "200px", height: "30px"}} placeholder={placeholder} required = {required}/>
    </div>
  )
}

export default Input