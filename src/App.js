import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

//PAGES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

// SECTIONS
import Biography from "./components/Biography";
import Service from "./components/Service";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* PAGES */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

        {/* PROFILES */}
        <Route path="/hilmi-isikoren" component={Biography} />
        <Route path="/belgin-benek" component={Biography} />

        {/* SERVICES */}
        <Route path="/emlakta-lider-gelistirme-programi" component={Service} />
        <Route path="/insaat-projeleri-pazarlama-ve-satis-danismanligi" component={Service} />
        <Route path="/markalasma-danismanligi" component={Service} />
        <Route path="/inşaat-proje-satis-ofisi-emlak-egitim-programi" component={Service} />
        <Route path="/emlak-ofisleri-emlak-egitim-programi" component={Service} />
        <Route path="/motivasyon-konusmalari" component={Service} />
      </div>
    );
  }
}

export default App;
