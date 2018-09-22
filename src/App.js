import React, { Component } from "react";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
