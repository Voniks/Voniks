import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <header className="landing-header">
        <div className="container">
          <div className="landing">
            <h1>Welcome to Voniks!</h1>
            <h3>[Slogan]</h3>
            <hr className="landing-divider" />
            <ul className="list-inline landing-buttons">
              <li><a href="#locations" className="btn btn-primary" role="button">Find a Location</a></li>
              <li><a href="#order" className="btn btn-primary" role="button">Order Now</a></li>
              <li><a href="#catering" className="btn btn-primary" role="button">Catering</a></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Landing;
