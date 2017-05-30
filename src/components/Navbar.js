import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex-container nav">

      <div className="flex-container nav-left">
        <div className="nav-element">Logo</div>
      </div>

      <div className="flex-container nav-right">
        <div className="nav-element">About</div>
        <div className="nav-element">Locations</div>
        <div className="nav-element">Products</div>
        <div className="nav-element">Catering</div>
      </div>

    </div>
  );
};

export default Navbar;
