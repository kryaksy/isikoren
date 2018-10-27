import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <img src={logo} height="40" alt="isikoren-logo" />
        </div>
        <div className="navigation flex">
          <ul className="menu-list">
            <li className="menu-item active">
              <Link to="/">
                <p>Ana Sayfa</p>
              </Link>
              <div className="line" />
            </li>
            <li className="menu-item">
              <Link to="/about">
                <p>Biz Kimiz</p>
              </Link>
              <div className="line" />
            </li>
            <li className="menu-item">
              <Link to="/services">
                <p>Servisler</p>
              </Link>
              <div className="line" />
            </li>
            <li className="menu-item">
              <Link to="/contact">
                <p>İletişim</p>
              </Link>
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
