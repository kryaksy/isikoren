import React, { Component } from "react";

//SECTION
import Header from "../Header";
import Welcome from "../Welcome";
import Pitch from "../Pitch";
import WhatWeDo from "../WhatWeDo";
import OnNumaraMotivasyon from "../10NumaraMotivasyon";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="home">
        <Header pathname={this.props.location.pathname}/>
        <Welcome page={"home"} />
        <Pitch />
        <WhatWeDo />
        {/* <OnNumaraMotivasyon /> */}
      </div>
    );
  }
}

export default Home;
