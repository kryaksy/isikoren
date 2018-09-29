import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class Menu extends Component {
  state = {
    sidebarOpen: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.closeSideMenu);
  }

  handleSideMenu = () => {
    if (this.state.sidebarOpen) {
      this.setState({ sidebarOpen: false });
    } else {
      this.setState({ sidebarOpen: true });
    }
  };

  closeSideMenu = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    return (
      <div id="App-top-menu" className={this.props.opened ? "open" : ""}>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="menu-list top">
          <Link to="/" className="menu-item">
            Ana Sayfa
          </Link>
          <Link to="/about" className="menu-item">
            Hakkımızda
          </Link>
          <Link to="/services" className="menu-item">
            Servisler
          </Link>
          <Link to="/contact" className="menu-item">
            İletişim
          </Link>
        </div>
        <div className="menu-icon" onClick={this.handleSideMenu}>
          <FontAwesomeIcon icon="bars" />
        </div>
        <div id="App-sidebar" className={this.state.sidebarOpen ? "open" : ""}>
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="menu-list side">
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
      </div>
    );
  }
}

export default Menu;
