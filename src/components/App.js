import React, { Component } from "react";
import Catering from "./Catering";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Locations from "./Locations";
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
          <Locations />
        </section>
        <section id="products">
          <h3>Products</h3>
          <Products />
        </section>
        <section id="catering">
          <Catering />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
