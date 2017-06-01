import React, { Component } from "react";
import Catering from "./Catering";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Products from "./Products";
import "../styles/App.css";
import "../styles/Flex.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <Navbar />
          <Landing />
        </div>
        <section id="locations">
          <h3>Locations</h3>
        </section>
        <section id="products">
          <h3>Products</h3>
          <Products />
        </section>
        <section id="catering">
          <h3>Catering</h3>
          <Catering />
        </section>
        <section id="contact">
          <h3>Contact Us</h3>
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;
