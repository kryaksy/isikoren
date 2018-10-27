import React, { Component } from "react";
import Header from "./Header";

class MenuWindow extends Component {
  render() {
    return (
      <div id="menuWindow">
        <Header />
        {/* <p className="slogan">Rekabete karşı meydan okur.</p> */}
        <ul className="follow-list flex">
          <li className="icon">
            <a href="https://www.facebook.com/isikoren" target="_blank" />
          </li>
          <li className="icon">
            <a href="https://twitter.com/hilmiisikoren" target="_blank" />
          </li>
          <li className="icon">
            <a href="https://www.instagram.com/hilmiisikoren" target="_blank" />
          </li>
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/hilmiisikoren"
              target="_blank"
            />
          </li>
          <li className="icon">
            <a
              href="https://www.youtube.com/c/hilmiisikorenblogger"
              target="_blank"
            />
          </li>
          <li className="icon">
            <a href="https://tr.pinterest.com/hilmiisikoren" target="_blank" />
          </li>
          <li className="icon">
            <a
              href="https://www.flickr.com/photos/hilmiisikoren"
              target="_blank"
            />
          </li>
          <li className="icon">
            <a href="https://vimeo.com/isikoren" target="_blank" />
          </li>
          <li className="icon">
            <a
              href="https://plus.google.com/+HilmiI%C5%9F%C4%B1k%C3%B6renblogger"
              target="_blank"
            />
          </li>
        </ul>
        <p className="statement">
          Cupidatat dolore quis reprehenderit quis deserunt.
        </p>
      </div>
    );
  }
}

export default MenuWindow;
