import React from "react";
import "../styles/Navbar.css";
import Logo from "../images/voniks-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
            <div id="hamburger-menu" className="navbar-header pull-right">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </div>

            <a href="#home">
              <img id="logo" src={Logo} alt="Voniks Logo" />
            </a>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav pull-right">
                  <li><a href="#about">About</a></li>
                  <li><a href="#locations">Locations</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#catering">Catering</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
