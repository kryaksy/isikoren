import React, { Component } from "react";
import MenuTop from "./Menu-top.js";

class Menu extends Component {
  state = {
    opened: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (e.srcElement.location.pathname === "/") {
      let scrollTop = e.target.scrollingElement.scrollTop;
      if (scrollTop > 500) {
        this.setState({ opened: true });
      } else {
        this.setState({ opened: false });
      }
    } else {
      this.setState({ opened: true });
    }
  };

  render() {
    return (
      // <MenuSide />
      <MenuTop opened={this.state.opened}/>
    );
  }
}

export default Menu;
