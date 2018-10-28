import React, { Component } from "react";

//SECTION
import Header from "../Header";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Pitch from "../Pitch";
import WhatWeDo from "../WhatWeDo";
import OnNumaraMotivasyon from "../10NumaraMotivasyon";
import References from "../References";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="home">
        <Header />
        <Welcome page={"home"} />
        <Pitch />
        <WhatWeDo />
        <OnNumaraMotivasyon />
        <References />
        <Footer />
      </div>
    );
  }
}

export default Home;
