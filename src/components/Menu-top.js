import React, { Component } from "react";
import logo from "../assets/Logo_1x.png";
import { Link } from "react-router-dom";

class Menu extends Component {

  state = {
    opened: false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    let scrollTop = e.target.scrollingElement.scrollTop;
    if(scrollTop > 600) {
      this.setState({ opened: true })
    } else {
      this.setState({ opened: false })
    }
  };

  render() {
    return (
      <div id="App-top-menu" className={(this.state.opened ? "open" : "")}>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="menu-list">
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
      </div>
    );
  }
}

export default Menu;
