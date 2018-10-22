import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <div className="heading">
            <div className="line" />
            <h2 className="title">Galeri</h2>
          </div>
        {/* <p className="statement">Enim anim sint sint laboris sunt.</p> */}
        <div className="collage">
          <div className="area-1">
            <div className="image-container" />
            <div className="image-container big" />
            <div className="image-container" />
          </div>
        </div>
        <a href="#gallery" className="more">daha fazla</a>
      </div>
    );
  }
}

export default Gallery;
