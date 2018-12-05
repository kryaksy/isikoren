import React, { Component } from "react";
import * as wpAPI from "./../wpAPI";

class OnNumaraMotivasyon extends Component {
  render() {
    const { title, snippet, url } = wpAPI.sampleAPI.ads.OnNumaraMotivasyon;

    return (
      <div id="onNumaraMotivasyon">
        <div className="container">
          <h2 className="title">{title}</h2>
          <p className="snippet">{snippet}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button>Sayfaya Git</button>
          </a>
        </div>
      </div>
    );
  }
}

export default OnNumaraMotivasyon;
