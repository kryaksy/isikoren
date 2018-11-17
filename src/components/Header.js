import React, { Component } from "react";
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
            {menu.map(item => (
              <li key={item.slug} className="menu-item">
                <Link to={item.slug}>
                  <p>{item.title}</p>
                </Link>
                <div className="line" />
              </li>
            ))}
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
