import React, {Component} from "react";
import ReactPlayer from 'react-player';

export default class Video extends Component {
	state = {
		videoURL: "//player.vimeo.com/video/279818248"
	}

	componentDidMount() {
    if (this.state.videoURL) {
      this.setState({ videoURL: this.props.url })
    }
  }

	render() {
		return (
    <div className="bg-video">
      <ReactPlayer
				className="react-player"
				url={this.state.videoURL}
				width="auto"
				height="auto"
        controls={false}
				playsinline
        playing
        muted
        loop
				config={{
    			youtube: {
      			playerVars: { showinfo: 1 }
					}
    		}}/>
		</div>);
	}
}
