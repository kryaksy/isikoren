import React, { Component } from "react";

import Header from "../Header";
import Welcome from "../Welcome";
import AllServices from "../AllServices";

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="services">
        <Header pathname={this.props.location.pathname}/>
        <Welcome page={"services"} />
        <AllServices />
      </div>
    );
  }
}

export default Services;
