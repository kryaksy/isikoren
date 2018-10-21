import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <div className="line" />
        <h2 className="title">Galeri</h2>
        {/* <p className="statement">Enim anim sint sint laboris sunt.</p> */}
        <div className="collage">
          <div className="area-1">
            <div className="image-container" />
            <div className="image-container" />
            <div className="image-container" />
          </div>
          <div className="area-2">
            <div className="image-container" />
            <div className="image-container" />
            <div className="image-container" />
          </div>
        </div>
        <div className="buttons">
          <div className="prev">
            <div className="line" />
          </div>
          <div className="next">
            <div className="line" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
