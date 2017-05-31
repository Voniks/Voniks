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
              <li><a href="#locations" className="btn btn-primary" role="button">Locations</a></li>
              <li><a href="#products" className="btn btn-primary" role="button">Products</a></li>
              <li><a href="#catering" className="btn btn-primary" role="button">Catering</a></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Landing;