import React, { Component } from "react";
import facebookIcon from "../assets/icons/facebook-f-brands.svg";
import twitterIcon from "../assets/icons/twitter-brands.svg";
import instagramIcon from "../assets/icons/instagram-brands.svg";
import linkedinIcon from "../assets/icons/linkedin-in-brands.svg";
import youtubeIcon from "../assets/icons/youtube-brands.svg";
import pinterestIcon from "../assets/icons/pinterest-p-brands.svg";
import flickrIcon from "../assets/icons/flickr-brands.svg";
import vimeoIcon from "../assets/icons/vimeo-v-brands.svg";
import googleplusIcon from "../assets/icons/google-plus-g-brands.svg";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="address">
          <h1>Işıkören Danışmanlık</h1>
          <p>ISTANBUL</p>
        </div>
        <div className="social-media">
          <div className="facebook icon">
            <img src={facebookIcon} alt="facebook"/>
          </div>
          <div className="twitter icon">
            <img src={twitterIcon} alt="twitter"/>
          </div>
          <div className="instagram icon">
            <img src={instagramIcon} alt="instagram"/>
          </div>
          <div className="linkedin icon">
            <img src={linkedinIcon} alt="linkedin"/>
          </div>
          <div className="youtube icon">
            <img src={youtubeIcon} alt="youtube"/>
          </div>
          <div className="pinterest icon">
            <img src={pinterestIcon} alt="pinterest"/>
          </div>
          <div className="flickr icon">
            <img src={flickrIcon} alt="flickr"/>
          </div>
          <div className="vimeo icon">
            <img src={vimeoIcon} alt="vimeo"/>
          </div>
          <div className="googleplus icon">
            <img src={googleplusIcon} alt="googleplus"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
