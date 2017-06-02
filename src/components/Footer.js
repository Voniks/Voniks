import React, { Component } from "react";
import "./../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">© 2014 by Voniks Juice LLC</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
