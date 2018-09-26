import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="address">
          <p>Işıkören Danışmanlık</p>
        </div>
        <div className="social-media">
          <div className="facebook icon" />
          <div className="twitter icon" />
          <div className="instagram icon" />
          <div className="linkedin icon" />
          <div className="youtube icon" />
          <div className="pinterest icon" />
          <div className="flicker icon" />
          <div className="vimeo icon" />
          <div className="googleplus icon" />
        </div>
      </div>
    );
  }
}

export default Footer;
