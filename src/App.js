import React, { Component } from "react";
import { Route } from "react-router-dom";
import {AnimatedSwitch} from "react-router-transition";
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
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
  			<AnimatedSwitch atEnter={{
  					opacity: 0
  				}} atLeave={{
  					opacity: 0
  				}} atActive={{
  					opacity: 1
  				}} className="switch-wrapper">

        {/* PAGES */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

        {/* PROFILES */}
        {wpAPI.sampleAPI.team.map( member => (
          <Route key={member.slug} path={member.slug} component={Biography} />
        ))}

        {/* SERVICES */}
        {wpAPI.sampleAPI.services.map( service => (
          <Route key={service.slug} path={service.slug} component={Service} />
        ))}
  			</AnimatedSwitch>
        {/* MENU WINDOW */}
        <MenuWindow />
        <Footer />

      </div>
        );
    }
}

export default App;