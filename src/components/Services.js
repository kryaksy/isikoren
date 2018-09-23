import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Service1 from "./services/Service1.js";
import Service2 from "./services/Service2.js";
import Service3 from "./services/Service3.js";
import Service4 from "./services/Service4.js";
import Service5 from "./services/Service5.js";
import Service6 from "./services/Service6.js";

class Services extends Component {
  render() {
    return (
      <div className="App-services">
        <h1>Servisler</h1>
        <ul className="services-list">
          <li className="service-link">
            <Link to="/services/emlakta-lider-gelistirme">Emlakta Lider Geliştirme Programı</Link>
          </li>
          <li className="service-link">
            <Link to="/services/pazarlama-ve-satis-danismanligi">
              İnşaat Projelerine Özel Pazarlama ve Satış Danışmanlığı
            </Link>
          </li>
          <li className="service-link">
            <Link to="/services/markalasma-danismanligi">Markalaşma Danışmanlığı</Link>
          </li>
          <li className="service-link">
            <Link to="/services/insaat-ve-satis-ofisi-emlak-egitimi">
              İnşaat Proje Satış Ofisi Ekiplerine Özel Emlak Eğitim Programları
            </Link>
          </li>
          <li className="service-link">
            <Link to="/services/emlak-ofisi-egitimi">
              Emlak Ofislerine Özel Emlak Eğitim Programları
            </Link>
          </li>
          <li className="service-link">
            <Link to="/services/motivasyon-konusmalari">Motivasyon Konuşmaları</Link>
          </li>
        </ul>
        <Route path="/services/emlakta-lider-gelistirme" component={Service1} />
        <Route path="/services/pazarlama-ve-satis-danismanligi" component={Service2} />
        <Route path="/services/markalasma-danismanligi" component={Service3} />
        <Route path="/services/insaat-ve-satis-ofisi-emlak-egitimi" component={Service4} />
        <Route path="/services/emlak-ofisi-egitimi" component={Service5} />
        <Route path="/services/motivasyon-konusmalari" component={Service6} />
      </div>
    );
  }
}

export default Services;
