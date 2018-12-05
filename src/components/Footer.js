import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import * as wpAPI from "./../wpAPI";

class Footer extends Component {
  render() {
    const { company, menu } = wpAPI.sampleAPI;

    return (
      <div id="footer">
        <div className="wrapper">
          <div>
            <div className="container">
              <div className="brand">
                <Link to="/">
                  <img
                    src={logo}
                    width="100"
                    color="white"
                    alt={company.logo.alt}
                  />
                </Link>
                <p className="slogan">Rekabete karşı meydan okur!</p>
              </div>
              <div className="footlinks">
                <ul className="menu list">
                  <h2 className="title">Keşfet</h2>
                  {menu.map(item => (
                    <li key={item.slug}>
                      <Link to={item.slug} className="menu-item">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="follow list">
                  <h2 className="title">Takip et</h2>
                  {company.contact.follow.map(item => (
                    <li key={item.name} className="menu-item">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="contact list">
                  <h2 className="title">İletişim</h2>
                  <a
                    href={"mailto:" + company.contact.email.text}
                    className="menu-item"
                  >
                    {company.contact.email.text}
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="next">
            <h2 className="title">Sonraki</h2>
            <p className="page">Biz Kimiz</p>
          </div>
          <div className="copyright">Copyrighted 2018</div>
        </div>
      </div>
    );
  }
}

export default Footer;
