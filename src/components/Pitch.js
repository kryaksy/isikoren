import React, { Component } from "react";

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
        <button>Hakkımızda</button>
      </div>
    );
  }
}

export default Pitch;
