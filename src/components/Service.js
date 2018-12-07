import React, { Component } from "react";
import * as wpAPI from "./../wpAPI";

import Header from "./Header";
import Footer from "./Footer";

class Service extends Component {
  state = {
    service: null
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.getData(this.props.location.pathname);
  }

  getData = pathname => {
    let service = wpAPI.sampleAPI.services.filter(service => {
      return service.slug === pathname ? service : null;
    })[0];
    this.setState({ service });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <div id="service">
          <div className="media" />
          <div className="info">
            <div className="heading">
              <div className="back-line" />
              <h2 className="name">{this.state.service.title}</h2>
            </div>
            <div className="container">
              {this.state.service.intro instanceof Array ? (
                this.state.service.intro.map(item => (
                  <p className="intro">{item}</p>
                ))
              ) : (
                <p className="intro">{this.state.service.intro}</p>
              )}
              <ul className="content list">
                <h3 className="title">İçerik</h3>
                {this.state.service.content.map(item => (
                  <li className="item">
                    <p className="name">{item}</p>
                  </li>
                ))}
              </ul>
              {this.state.service.requirements ? (
                <ul className="requirements list">
                  <div>
                    <h3 className="title">Katılım Şartları</h3>
                    <div className="filter flex">
                      <p>Kurumsal</p>
                      <p>Bireysel</p>
                    </div>
                  </div>
                  {this.state.service.requirements.kurumsal.map(item => (
                    <li className="item">{item}</li>
                  ))}
                </ul>
              ) : null}
              <button className="apply">Kayıt ol</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Service;
