import React, { Component } from "react";

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
            <a>Servislere gözat</a>
            <div className="line" />
          </div>
        </div>
        <div className="content">
          <ul className="list">
            <li className="item">
              <div className="icon" />
              <p className="title">Emlak</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Satış</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Pazarlama</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Franchising</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Marka Danışmanlığı</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Motivasyon Konuşmaları</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">Eğitim</p>
            </li>
            <li className="item">
              <div className="icon" />
              <p className="title">İletişim</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Specialties;
