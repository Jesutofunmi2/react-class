import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div style={{ margin: "12px", display: "flex" }}>
    <li><Link to="/">Home</Link></li>
    <li> <Link to="/about">About</Link></li>
    </div>
  )
}

export default Nav