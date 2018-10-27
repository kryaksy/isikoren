import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div>
          <div className="container">
            <div className="brand">
              <Link to="/">
                <img src={logo} width="100" color="white" alt="isikoren-logo" />
              </Link>
              <p className="slogan">Rekabete karşı meydan okur!</p>
            </div>
            <div className="footlinks">
              <ul className="menu list">
                <h2 className="title">Keşfet</h2>
                <li className="menu-item">Ana Sayfa</li>
                <li className="menu-item">Biz Kimiz?</li>
                <li className="menu-item">Servisler</li>
                <li className="menu-item">İletişim</li>
              </ul>
              <ul className="follow list">
                <h2 className="title">Takip et</h2>
                <li className="menu-item">
                  <a
                    href="https://www.facebook.com/isikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://twitter.com/hilmiisikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.instagram.com/hilmiisikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.linkedin.com/in/hilmiisikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.youtube.com/c/hilmiisikorenblogger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://tr.pinterest.com/hilmiisikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pinterest
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.flickr.com/photos/hilmiisikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flickr
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://vimeo.com/isikoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vimeo
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://plus.google.com/+HilmiI%C5%9F%C4%B1k%C3%B6renblogger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google +
                  </a>
                </li>
              </ul>
              <ul className="contact list">
                <h2 className="title">İletişim</h2>
                <a href="mailto:info@isikoren.com" className="menu-item">
                  info@isikoren.com
                </a>
              </ul>
            </div>
          </div>
          <div className="copyright">Copyrighted 2018</div>
        </div>
        <div className="next">
          <h2 className="title">Sonraki</h2>
          <p className="menu-item">Biz Kimiz</p>
        </div>
      </div>
    );
  }
}

export default Footer;
