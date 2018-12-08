import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import * as wpAPI from "./../wpAPI";

class Header extends Component {
    state = {
        minimized: false,
        visible: true
    };

    componentDidMount() {
        this.scrollDetection();
    }

    scrollDetection = () => {
        // Presents class
        let that = this;

        // Initial state
        var scrollPos = 0;

        // To
        let minimizeLimit = 100;
        let hideLimit = 700;
        let resolution = 50;

        // adding scroll event
        window.addEventListener("scroll", function() {
            // Storing top distance for every scroll event
            let topDistance = -1 * document.body.getBoundingClientRect().top;

            if (
                topDistance > scrollPos + resolution ||
                topDistance < scrollPos - resolution
            ) {
                // detects new state and compares it with the new one
                if (topDistance >= 0 && topDistance <= minimizeLimit) {
                    // Default header until minimizeLimit
                    if (that.state.minimized || !that.state.visible) {
                        that.resetHeader();
                    }
                } else if (
                    topDistance > minimizeLimit &&
                    topDistance <= hideLimit &&
                    !that.state.minimized
                ) {
                    // Minimized header
                    that.minimizeHeader();
                } else if (topDistance > hideLimit && that.state.minimized) {
                    if (topDistance < scrollPos) {
                        // Scrolling up will show header
                        if (!that.state.visible) {
                            that.showHeader();
                        }
                    } else {
                        if (that.state.visible) {
                            // Scrolling down will hide header
                            that.hideHeader();
                        }
                    }
                }
                // saves the new position for iteration.
                scrollPos = topDistance;
            }
        });
    };

    minimizeHeader = () => {
        this.setState({ minimized: true });
    };

    hideHeader = () => {
        this.setState({ visible: false });
    };

    showHeader = () => {
        this.setState({ visible: true });
    };

    resetHeader = () => {
        this.setState({ minimized: false, visible: true });
    };

    render() {
        const { company, menu } = wpAPI.sampleAPI;

        return (
            <div
        id="header"
        className={
          (this.state.minimized ? "mini" : "") +
          " " +
          (this.state.visible ? "" : "hide")
        }
      >
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                height={this.state.minimized ? "30" : "40"}
                alt={company.logo.alt}
              />
            </Link>
          </div>
          <div className="navigation flex">
            <ul className="menu-list">
              {menu.map(item => (
                <li key={item.slug} className={"menu-item" + (this.props.pathname === item.slug ? " active" : "")}>
                  <Link to={item.slug}>
                    <p>{item.title}</p>
                  </Link>
                  <div className="line" />
                </li>
              ))}
            </ul>
            <div className="icon-container">
              <div className="menu-icon">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Header;