import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Welcome from "../Welcome";
import AllServices from "../AllServices";

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="services">
        <Header />
        <Welcome />
        <AllServices />
        <Footer />
      </div>
    );
  }
}

export default Services;
