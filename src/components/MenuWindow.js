import React, { Component } from "react";
import "./MenuWindow.css";

import Header from "./Header";

class MenuWindow extends Component {
  render() {
    return (
      <div id="menuWindow">
        <Header />
        {/* <p className="slogan">Rekabete karşı meydan okur.</p> */}
        <ul className="follow-list flex">
          {follow.map(account => (
            <li key={"menuWindow" + account.name} className="icon">
              <a href={account.url} target="_blank" rel="noopener noreferrer">x</a>
            </li>
          ))}
        </ul>
        <p className="statement">
          Cupidatat dolore quis reprehenderit quis deserunt.
        </p>
      </div>
    );
  }
}

export default MenuWindow;
