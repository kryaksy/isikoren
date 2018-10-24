import React, { Component } from "react";
import logo from "../assets/logo.png";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <img src={logo} height="40" />
        </div>
        <ul className="menu-list">
          <li className="menu-item active">
            Ana Sayfa
            <div className="line" />
          </li>
          <li className="menu-item">
            Biz Kimiz
            <div className="line" />
          </li>
          <li className="menu-item">
            Servisler
            <div className="line" />
          </li>
          <li className="menu-item">
            İletişim
            <div className="line" />
          </li>
        </ul>
        <div id="menu-icon">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default Header;
