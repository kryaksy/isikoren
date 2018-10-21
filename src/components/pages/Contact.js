import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Header />
        <div className="container">
          <div className="background" />
          <div className="line" />
          <h2>İletişime geç.</h2>
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
