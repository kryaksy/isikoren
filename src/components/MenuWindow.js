import React, { Component } from "react";

class MenuWindow extends Component {
  render() {
    return (
      <div id="menuWindow">
        <div className="logo" />
        <div className="close button" />
        <ul className="menu-list">
          <li className="menu-item">
            <span className="line" />
            Ana Sayfa
          </li>
          <li className="menu-item">
            <span className="line" />
            Biz Kimiz?
          </li>
          <li className="menu-item">
            <span className="line" />
            Servisler
          </li>
          <li className="menu-item">
            <span className="line" />
            İletişim
          </li>
        </ul>
        <p className="slogan">Rekabete karşı meydan okur.</p>
        <ul className="follow icons">
          <li className="item">
            <a href="https://www.facebook.com/isikoren" target="_blank">
              Facebook
            </a>
          </li>
          <li className="item">
            <a href="https://twitter.com/hilmiisikoren" target="_blank">
              Twitter
            </a>
          </li>
          <li className="item">
            <a href="https://www.instagram.com/hilmiisikoren" target="_blank">
              Instagram
            </a>
          </li>
          <li className="item">
            <a href="https://www.linkedin.com/in/hilmiisikoren" target="_blank">
              Linkedin
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.youtube.com/c/hilmiisikorenblogger"
              target="_blank"
            >
              Youtube
            </a>
          </li>
          <li className="item">
            <a href="https://tr.pinterest.com/hilmiisikoren" target="_blank">
              Pinterest
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.flickr.com/photos/hilmiisikoren"
              target="_blank"
            >
              Flickr
            </a>
          </li>
          <li className="item">
            <a href="https://vimeo.com/isikoren" target="_blank">
              Vimeo
            </a>
          </li>
          <li className="item">
            <a
              href="https://plus.google.com/+HilmiI%C5%9F%C4%B1k%C3%B6renblogger"
              target="_blank"
            >
              Google +
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuWindow;
