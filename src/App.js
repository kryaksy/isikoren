import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "./Typo.css";
import * as wpAPI from "./wpAPI";

//PAGES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

// SECTIONS
import Biography from "./components/Biography";
import Service from "./components/Service";
import MenuWindow from "./components/MenuWindow";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO */
        /* {wpAPI.mainPages.map( page => (
          <Route exact path={page.slug} component={page.component} />
            )} */}

        {/* PAGES */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

        {/* PROFILES */}
        {wpAPI.sampleAPI.team.map( member => (
          <Route path={member.slug} component={Biography} />
        ))}

        {/* SERVICES */}
        {wpAPI.sampleAPI.services.map( service => (
          <Route path={service.slug} component={Service} />
        ))}

        {/* MENU WINDOW */}
        <MenuWindow />
      </div>
    );
  }
}

export default App;
