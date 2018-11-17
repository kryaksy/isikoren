import React, { Component } from "react";
import "./Specialties.css";

class Specialties extends Component {
  render() {
    return (
      <div id="specialties">
        <div className="header">
          <div className="head">
            <div className="line" />
            <h2 className="title">Uzmanlık Alanlarımız</h2>
          </div>
          <div className="linking">
            <a href="/services">Servislere gözat</a>
            <div className="line" />
          </div>
        </div>
        <div className="content">
          <ul className="list">
            {specialties.all.map(spec => (
              <li key={spec.title} className="item">
                <div className="icon" />
                <p className="title">{spec.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Specialties;
