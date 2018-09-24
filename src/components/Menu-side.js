import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faBars);

class Menu extends Component {
  handleMenu = () => {
    let sideBar = document.getElementById("App-sidebar");
    sideBar.classList.toggle("open");
  };

  render() {
    return (
      <div id="App-sidebar">
        <div className="menu-icon" onClick={this.handleMenu}>
          <FontAwesomeIcon icon="bars" />
        </div>
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
