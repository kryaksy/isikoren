import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Welcome from "../Welcome";
import References from "../References";
import Team from "../Team";
import Story from "../Story";
import Specialties from "../Specialties";
import Gallery from "../Gallery";

class About extends Component {
  render() {
    return (
      <div id="about">
        <Header />
        <Welcome />
        <Team />
        <Story />
        <Specialties />
        <References />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default About;
