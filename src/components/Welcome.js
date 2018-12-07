import React, { Component } from "react";
import * as wpAPI from "./../wpAPI";

class Welcome extends Component {
  state = {
    title: "",
    text: ""
  };

  componentDidMount() {
    this.setState({ title: wpAPI.sampleAPI.welcome[this.props.page].title });
    this.setState({ text: wpAPI.sampleAPI.welcome[this.props.page].snippet });
  }

  render() {
    return (
      <div className="welcome">
        <div className="bg-video" />
        <div className="content">
          <div className="heading">
            <div className="line" />
            <h2 className="title">{this.state.title}</h2>
          </div>
          <p className="text">{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default Welcome;
