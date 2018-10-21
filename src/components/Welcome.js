import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="bg-video" />
        <div className="line" />
        <h2 className="title">Işıkören Danışmanlık</h2>
        <p className="text">
          Sektör ayrımı yapmaksızın işinde başarılı olmak isteyen şirketleri,
          kurumları ve hatta bireyleri farklılaştırarak öne çıkarmak amacıyla
          danışmanlık, eğitim ve seminerler veririz.
        </p>
      </div>
    );
  }
}

export default Welcome;
