import React, { Component } from "react";
import "./App.css";

//PAGES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
