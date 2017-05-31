import React, { Component } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
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
        </section>
        <section id="catering">
          <h3>Catering</h3>
        </section>
      </div>
    );
  }
}

export default App;
