import React from "react";
import LogoPath from "../images/voniks-logo.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div>
      <img id="logo" src={LogoPath} alt="Voniks Logo" />
    </div>
  );
};

export default Logo;
