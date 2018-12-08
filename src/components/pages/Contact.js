import React, { Component } from "react";
import * as wpAPI from "./../../wpAPI";

import Header from "../Header";
import Footer from "../Footer";

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { contact } = wpAPI.sampleAPI.company;

    return (
      <div>
        <Header pathname={this.props.location.pathname}/>
        <div id="contact">
          <div className="background" />
          <div className="heading">
            <div className="line" />
            <h2 className="title">{contact.title}</h2>
          </div>
          <ul className="list">
            <li className="item">
              <h3>{contact.workingHours.title}</h3>
              <p>{contact.workingHours.text}</p>
            </li>
            <li className="item">
              <h3>{contact.phone.title}</h3>
              <a href={"tel:" + contact.phone.href}>{contact.phone.text}</a>
            </li>
            <li className="item">
              <h3>{contact.email.title}</h3>
              <a href={"mailto:" + contact.email.text}>{contact.email.text}</a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
