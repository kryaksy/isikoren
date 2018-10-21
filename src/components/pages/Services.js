import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import AllServices from "../AllServices";

class Services extends Component {
  render() {
    return (
      <div id="services">
        <Header />
        <AllServices />
        <Footer />
      </div>
    );
  }
}

export default Services;
