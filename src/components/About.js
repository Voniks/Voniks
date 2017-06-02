import React, { Component } from "react";
import "./../styles/About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
        <hr className="section-divider" />
        <p>
          Voniks: Premium Juices & Fruit Smoothies is an all-natural juice and smoothie chain established in Gaithersburg, Maryland. 
          Our goal is to be your on the go fresh smoothies & juices food option. We deliver our products through our unique mobile
          smoothie stands & online platform.
        </p>
      </div>
    );
  }
}

export default About;
