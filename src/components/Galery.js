import React, { Component } from "react";
import Image from "./Image.js";

class Galery extends Component {
  render() {
    return (
      <div id="galery">
        <h1 className="title">Galeri</h1>
        <div className="list">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    );
  }
}

export default Galery;
