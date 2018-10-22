import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div id="team">
        <div className="heading">
          <div className="line" />
          <h2 className="title">Ekibimiz</h2>
        </div>
        {/* <p className="statement">
          Sit veniam dolore commodo enim laboris deserunt officia.
        </p> */}
        <ul className="list">
          <li className="item">
            <img className="picture" />
            <h3 className="name">Hilmi Işıkören</h3>
            <p className="pitch">
              1997 – 2010 tarihleri arasında uluslararası üç gayrimenkul
              markasındaki üst düzey yöneticilik deneyimiyle de gayrimenkul ve
              inşaat sektörün önde gelen ismidir.
            </p>
            {/* Learn More button might be needed */}
          </li>
          <li className="item">
            <img className="picture" />
            <h3 className="name">Belgin Benek</h3>
            <p className="pitch">
              Işıkören Danışmanlık şirketinin kurucu ortağı Belgin Benek,
              iletişim ve pazarlama konusunda uzmanlığının yanı sıra yetişkin
              eğitimcisi olarak da mesleki yetkinliğe sahiptir.
            </p>
            {/* Learn More button might be needed */}
          </li>
        </ul>
      </div>
    );
  }
}

export default Team;
