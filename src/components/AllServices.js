import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as wpAPI from "./../wpAPI";

class AllServices extends Component {
  render() {
    const { services } = wpAPI.sampleAPI;

    return (
      <div id="allServices">
        <div className="top">
          <div className="heading">
            <div className="line" />
            <h2 className="title">Servisler</h2>
          </div>
          <ul className="filter">
            <li className="item">Hepsi</li>
            <li className="item">Emlak</li>
            <li className="item">İnşaat</li>
          </ul>
        </div>
        <div className="container">
          <ul className="service-list">
            {services.map(service => (
              <li key={service.slug} className="item">
                <div className="media" />
                <div className="content">
                  <div className="heading small">
                    <div className="line" />
                    <h4 className="title">{service.title}</h4>
                  </div>
                  <p className="description">
                    {service.description}
                  </p>
                  <Link to={service.slug}>
                    <button>İncele</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllServices;
