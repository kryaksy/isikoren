import React, { Component } from "react";
import logo from "../assets/logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <img src={logo} height="40" />
        </div>
        <div className="navigation flex">
          <ul className="menu-list">
            <li className="menu-item active">
              <p>Ana Sayfa</p>
              <div className="line" />
            </li>
            <li className="menu-item">
              <p>Biz Kimiz</p>
              <div className="line" />
            </li>
            <li className="menu-item">
              <p>Servisler</p>
              <div className="line" />
            </li>
            <li className="menu-item">
              <p>İletişim</p>
              <div className="line" />
            </li>
          </ul>
          <div className="icon-container">
            <div className="menu-icon">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
