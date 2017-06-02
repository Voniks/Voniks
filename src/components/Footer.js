import React, { Component } from "react";
import "./../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <span className="copyright">© 2014 by Voniks Juice LLC</span>
              </div>
              <div className="col-md-3">
                <ul className="list-inline social-buttons">
                  <li><a href="https://www.facebook.com/Voniksfoods/"><i className="fa fa-facebook-square"></i></a></li>
                  <li><a href="https://www.instagram.com/voniksfoods/"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/VoniksJuice"><i className="fa fa-twitter"></i></a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <a href="tel:1-301-963-8218"><i className="glyphicon glyphicon-earphone"></i><p>Tel:1-301-963-8218</p></a>
                <p>Fax: 1-610-887-7127</p>
                <a href="MAILTO:guestservice@voniksjuice.com"><p>Email: guestservice@voniksjuice.com</p></a>
              </div>
              <div className="col-md-3">
                <p><strong>Operating Hours:</strong></p>
                <p>Mon-Fri: 10am-9pm</p>
                <p>Sat-Sun: 9am-9pm</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
