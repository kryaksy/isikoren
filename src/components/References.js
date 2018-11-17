import React, { Component } from "react";
import "./References.css";
import * as wpAPI from "./../wpAPI";

class References extends Component {
  render() {
    const { title, all } = wpAPI.sampleAPI.references;
    let i = 0;

    return (
      <div id="references">
        <div className="heading">
          <div className="line" />
          <h2 className="title">{title}</h2>
        </div>
        <ul className="list">
          {all.map(item => {
            i++;
            return (
            <li key={"ref" + i} className="item">
              <img alt="logo" />
            </li>
          );
          })}
        </ul>
        <div>
          <a href="/references" className="more">
            daha fazla
          </a>
        </div>
      </div>
    );
  }
}

export default References;
