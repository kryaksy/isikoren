import React, { Component } from "react";
import Home from "./components/Home.js"
import logo from "./assets/Logo_1x.png";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

class App extends Component {
  handleMenu = () => {
    let sideBar = document.getElementById("App-sidebar");
    sideBar.classList.toggle("open");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-slogan">Rekabete karşı meydan okur!</p>
        </header>
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
        <Home />
      </div>
    );
  }
}

export default App;
