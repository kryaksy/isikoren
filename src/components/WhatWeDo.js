import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.css";
import * as wpAPI from "./../wpAPI";

class WhatWeDo extends Component {
  render() {
    const { services } = wpAPI.sampleAPI;

    return (
      <div id="whatWeDo">
        <div className="heading">
          <div className="line" />
          <h2 className="title">Neler yaparız?</h2>
        </div>
        <ul className="valueProposition list">
          {services.map(service => (
            <li key={service.slug} className="list-item">
              {/* Image or video */}
              <div className="media" />
              <div className="content">
                <Link to={service.slug}>
                  <h3 className="title">{service.valueProposition.title}</h3>
                </Link>
                <p className="snippet">{service.valueProposition.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WhatWeDo;
