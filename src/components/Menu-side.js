import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div id="App-sidebar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/"> Ana Sayfa </Link>
          </li>
          <li className="menu-item">
            <Link to="/about"> Hakkımızda </Link>
          </li>
          <li className="menu-item">
            <Link to="/services"> Servisler </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact"> İletişim </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
