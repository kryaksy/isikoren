import React, { Component } from "react";
import Service from "./Service.js";
import Footer from "./Footer.js";

class Services extends Component {
  state = {
    activeService: "1",
    services: {
      1: {
        title: "Emlakta Lider Geliştirme Programı"
      },
      2: {
        title: "İnşaat Projelerine Özel Pazarlama ve Satış Danışmanlığı"
      },
      3: {
        title: "Markalaşma Danışmanlığı"
      },
      4: {
        title: "Emlak Ofislerine Özel Emlak Eğitim Programları"
      },
      5: {
        title:
          "İnşaat Proje Satış Ofisi Ekiplerine Özel Emlak Eğitim Programları"
      },
      6: {
        title: "Motivasyon Konuşmaları"
      }
    }
  };

  handleClick = e => {
    this.setState({ activeService: e.target.id });
  };

  render() {
    return (
      <div className="App-services">
        <div className="container">
          <h1 className="title">Servisler</h1>
          <div className="services-container">
            <ul className="services-list">
              <li className="service-link" id="1" onClick={this.handleClick}>
                Emlakta Lider Geliştirme Programı
              </li>
              <li className="service-link" id="2" onClick={this.handleClick}>
                Pazarlama ve Satış Danışmanlığı
              </li>
              <li className="service-link" id="3" onClick={this.handleClick}>
                Markalaşma Danışmanlığı
              </li>
              <li className="service-link" id="4" onClick={this.handleClick}>
                Emlak Eğitim Programları (Emlak)
              </li>
              <li className="service-link" id="5" onClick={this.handleClick}>
                Emlak Eğitim Programları (İnşaat)
              </li>
              <li className="service-link" id="6" onClick={this.handleClick}>
                Motivasyon Konuşmaları
              </li>
            </ul>
            <Service service={this.state.services[this.state.activeService]} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
