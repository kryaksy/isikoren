import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pitch.css";

class Pitch extends Component {
  render() {
    return (
      <div id="pitch">
        <h2 className="title">Biz rekabete karşıyız.</h2>
        <p className="snippet">
          Bizce rekabet sadece sporda vardır. İş hayatında rekabet edip rakibe
          benzeyerek aynılaşmak yerine yeni bir kulvar açarak farklılaşmaya,
          liderlik etmeye inanırız.
        </p>
        <Link to="/about">
          <button>Hakkımızda</button>
        </Link>
      </div>
    );
  }
}

export default Pitch;
