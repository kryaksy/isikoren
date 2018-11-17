import React, { Component } from "react";

//SECTION
import Header from "../Header";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Pitch from "../Pitch";
import WhatWeDo from "../WhatWeDo";
import OnNumaraMotivasyon from "../10NumaraMotivasyon";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Welcome />
        <Pitch />
        <WhatWeDo />
        <OnNumaraMotivasyon />
        <Footer />
      </div>
    );
  }
}

export default Home;
