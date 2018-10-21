import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo" />
        <ul className="menu-list">
          <li className="menu-item">
            <span className="line" />
            Ana Sayfa
          </li>
          <li className="menu-item">
            <span className="line" />
            Biz Kimiz?
          </li>
          <li className="menu-item">
            <span className="line" />
            Servisler
          </li>
          <li className="menu-item">
            <span className="line" />
            İletişim
          </li>
        </ul>
        <div className="menu-icon" />
      </div>
    );
  }
}

export default Header;
