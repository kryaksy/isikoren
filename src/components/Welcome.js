import React, { Component } from "react";
import Video from "./Video"
import * as wpAPI from "./../wpAPI";

class Welcome extends Component {
    state = {
        title: "",
        text: ""
    };

    componentDidMount() {
        this.setState({ title: wpAPI.sampleAPI.welcome[this.props.page].title });
        this.setState({ text: wpAPI.sampleAPI.welcome[this.props.page].snippet });
    }

    render() {
        return (
            <div className="welcome">
                <Video url={this.state.videoURL}/>
                <div className="content">
                    <div className="heading">
                        <h2 className="title">{this.state.title}</h2>
                        <div className="headline" />
                        <p className="text">{this.state.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;