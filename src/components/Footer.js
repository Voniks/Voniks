import React, { Component } from "react";
import "./../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">© 2014 by Voniks Juice LLC</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li><a href="https://www.facebook.com/Voniksfoods/"><i className="fa fa-facebook-square"></i></a></li>
                  <li><a href="https://www.instagram.com/voniksfoods/"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/VoniksJuice"><i className="fa fa-twitter"></i></a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <a href="tel:1-301-963-8218"><i className="glyphicon glyphicon-earphone"></i><p>1-301-963-8218</p></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
