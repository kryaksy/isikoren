import React, { Component } from "react";
import "./10NumaraMotivasyon.css";

class OnNumaraMotivasyon extends Component {
  render() {
    return (
      <div id="onNumaraMotivasyon">
        <div className="container">
          <h2 className="title">10 Numara Motivasyon</h2>
          <p className="snippet">
            Hamurunda sevgi, temelinde motivasyon olan iş ve hayata dair
            paylaşımlarımızın insanlara ilham vermesi amacıyla yayındayız.
            Sayfamızdaki tüm içerikler kendi özgün fikir ve tavsiyelerimizden
            oluşmaktadır.
          </p>
          <a
            href="https://www.10numaramotivasyon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Sayfaya Git</button>
          </a>
        </div>
      </div>
    );
  }
}

export default OnNumaraMotivasyon;
