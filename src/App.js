import React, { Component } from "react";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
