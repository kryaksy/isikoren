import React, { Component } from "react";
import referenceImage from "../assets/images/reference.png";

class Reference extends Component {
  render() {
    return (
      <div className="reference">
        <img src={referenceImage} height="50px" alt="century21 logo" />
      </div>
    );
  }
}

export default Reference;
