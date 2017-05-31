import React from "react";
import "../styles/Navbar.css";
import Logo from "../images/voniks-logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li><a href="#" className="no-decoration-black">About</a></li>
        <li><a href="#" className="no-decoration-black">Locations</a></li>
        <li><a href="#" className="no-decoration-black">Products</a></li>
        <li><a href="#" className="no-decoration-black">Catering</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
