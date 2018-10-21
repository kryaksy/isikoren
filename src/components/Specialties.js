import React, { Component } from "react";

class Specialties extends Component {
  render() {
    return (
      <div id="specialties">
        <div className="line" />
        <h2 className="title">Uzmanlık Alanlarımız</h2>
        <ul className="list">
          <li className="item">
            <div className="icon" />
            <h3 className="title">Emlak</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Satış</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Pazarlama</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Franchising</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Marka Danışmanlığı</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Motivasyon Konuşmaları</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">Eğitim</h3>
          </li>
          <li className="item">
            <div className="icon" />
            <h3 className="title">İletişim</h3>
          </li>
        </ul>
        <button>Servislere gözat</button>
      </div>
    );
  }
}

export default Specialties;
