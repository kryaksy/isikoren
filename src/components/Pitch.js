import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pitch extends Component {
  render() {
    return (
      <div id="pitch">
        <div className="container">
          <p className="snippet">İşinde başarılı olmak isteyen emlak ofisi sahiplerini, danışmanlarını, inşaat proje sahiplerini, proje satış ofisi ekiplerini farklılaştırarak öne çıkarmak amacıyla danışmanlık, eğitim ve seminerler veririz.</p>
          <Link to="/about">
            <button>Hakkımızda</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Pitch;
