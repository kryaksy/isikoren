import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-slogan">Rekabete karşı meydan okur!</p>
      </header>
    );
  }
}

export default Header;
