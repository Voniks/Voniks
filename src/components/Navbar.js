import React from "react";
import "../styles/Navbar.css";
import Logo from "../images/voniks-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="container">
            <div id="hamburger-menu" className="navbar-header pull-right">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </div>

            <img id="logo" src={Logo} alt="Voniks Logo" />
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav pull-right">
                  <li><a href="index.php">Home</a></li>
                  <li><a href="about.php">About</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
