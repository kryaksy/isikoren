import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import * as wpAPI from "./../wpAPI";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              height="40"
              alt={wpAPI.sampleAPI.company.logo.alt}
            />
          </Link>
        </div>
        <div className="navigation flex">
          <ul className="menu-list">
            {wpAPI.sampleAPI.menu.map(item => (
              <li className="menu-item">
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
