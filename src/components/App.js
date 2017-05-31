import React, { Component } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "../styles/App.css";
import "../styles/Flex.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Logo />
      </div>
    );
  }
}

export default App;
