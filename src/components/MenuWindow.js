import React, { Component } from "react";
import "./MenuWindow.css";
import * as wpAPI from "./../wpAPI";

class MenuWindow extends Component {
  render() {
    const { follow } = wpAPI.sampleAPI.company.contact;
    return (
      <div id="menuWindow">
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
