import React, { Component } from "react";
import { Link } from "react-router-dom";

class WhatWeDo extends Component {
  render() {
    return (
      <div id="whatWeDo">
          <div className="container">
              <div className="hero">
                  <div className="image-container"></div>
                  <div className="content lined">
                      <div className="line"/>
                      <h3 className="title">Emlakta Lider Geliştirme Programı</h3>
                  </div>
              </div>
              <div className="categories">
                  <div className="emlak">
                      <div className="image-container"></div>
                      <div className="content lined">
                          <div className="line"/>
                          <h4 className="title">Emlak Servislerimiz</h4>
                      </div>
                      <button>Gözat</button>
                  </div>
                  <div className="insaat">
                      <div className="image-container"></div>
                      <div className="content lined">
                          <div className="line"/>
                          <h4 className="title lined">İnşaat Servislerimiz</h4>
                      </div>
                      <button>Gözat</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default WhatWeDo;
