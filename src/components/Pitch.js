import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pitch.css";
import * as wpAPI from "./../wpAPI";

class Pitch extends Component {
  render() {
    const { title, text } = wpAPI.sampleAPI.pitch;

    return (
      <div id="pitch">
        <h2 className="title">{title}</h2>
        <p className="snippet">{text}</p>
        <Link to="/about">
          <button>Hakkımızda</button>
        </Link>
      </div>
    );
  }
}

export default Pitch;
