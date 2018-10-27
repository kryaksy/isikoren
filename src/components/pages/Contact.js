import React, { Component } from "react";
import "./Contact.css";

import Header from "../Header";
import Footer from "../Footer";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="contact">
          <div className="background" />
          <div className="heading">
            <div className="line" />
            <h2 className="title">İletişime geç.</h2>
          </div>
          <ul className="list">
            <li className="item">
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi-Cuma: 9:00 – 17:00</p>
            </li>
            <li className="item">
              <h3>Telefon</h3>
              <a href="tel:+905323741070">(0532) 374 10 70</a>
            </li>
            <li className="item">
              <h3>Email</h3>
              <a href="mailto:info@isikoren.com">info@isikoren.com</a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
