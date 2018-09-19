import React, { Component } from "react";
import logo from "./assets/Logo_1x.png";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu-icon">
          <FontAwesomeIcon icon="bars" />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-slogan">Rekabete karşı meydan okur!</p>
        </header>
        <div className="App-container">Container</div>
      </div>
    );
  }
}

export default App;
