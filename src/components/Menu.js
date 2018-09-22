import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
          <li className="menu-item">Ana Sayfa</li>
          <li className="menu-item">Hakkımızda</li>
          <li className="menu-item">Servisler</li>
          <li className="menu-item">İletişim</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
