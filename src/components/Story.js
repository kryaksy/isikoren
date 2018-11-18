import React, { Component } from "react";
import "./Story.css";
import * as wpAPI from "./../wpAPI";

class Story extends Component {
  render() {
    const { story } = wpAPI.sampleAPI;

    return (
      <div id="story">
        <div className="media" />
        <div className="container">
          <div className="heading">
            <div className="line" />
            <h2 className="title">{story.title}</h2>
          </div>
          <div className="content">
            {story.intro.map(text => (
              <p key={text.substring(0,5)} className="text">{text}</p>
            ))}
            <ul className="list">
              <li className="ourJob">
                {/* <div className="line" /> */}
                <h3 className="head">{story.ourJob.title}</h3>
                <p className="description">
                  {story.ourJob.text}
                </p>
              </li>
              <li className="ourFocus">
                {/* <div className="line" /> */}
                <h3 className="head">{story.ourFocus.title}</h3>
                <p className="description">
                  {story.ourFocus.text}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
