import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import * as wpAPI from "./../wpAPI";

class Header extends Component {
  state = {
    minimized: false,
    visible: true
  };

  render() {
    const { company, menu } = wpAPI.sampleAPI;

    return (
      <div
        id="header"
        className={
          (this.state.minimized ? "mini" : "") +
          " " +
          (this.state.visible ? "" : "hide")
        }
      >
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                height={this.state.minimized ? "30" : "40"}
                alt={company.logo.alt}
              />
            </Link>
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
      </div>
    );
  }
}

export default Header;
