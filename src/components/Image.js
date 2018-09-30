import React, { Component } from "react";
import photo from "../assets/images/galery.jpeg";

class Image extends Component {
  render() {
    return (
      <div className="photo">
        <img src={photo} width="300px" alt="fotograf" />
      </div>
    );
  }
}

export default Image;
