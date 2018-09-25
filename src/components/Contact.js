import React, { Component } from "react";
import Footer from "./Footer.js";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App-contact">
        <h1 className="title">İletişim</h1>
        <div className="contact-info">
          <div>
            <div className="icon" />
            <h3>Çalışma Saatleri</h3>
            <p>Pazartesi-Cuma: 9:00 – 17:00</p>
          </div>
          <div>
            <div className="icon" />
            <h3>Telefon</h3>
            <p> (0532) 374 10 70</p>
          </div>
          <div>
            <div className="icon" />
            <h3>Email</h3>
            <p>info@isikoren.com</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
