import React, { Component } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "../styles/App.css";
import "../styles/Flex.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
