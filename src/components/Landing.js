import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <header className="landing-header">
        <div className="container">
          <h1>Welcome to Voniks!</h1>
          <h3>[Slogan]</h3>
          <hr className="landing-divider" />
          <ul className="list-inline landing-buttons">
            <li><a href="#locations" className="btn btn-primary btn-lg" role="button">Locations</a></li>
            <li><a href="#products" className="btn btn-primary btn-lg" role="button">Products</a></li>
            <li><a href="#catering" className="btn btn-primary btn-lg" role="button">Catering</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Landing;
