import React, { Component } from "react";
import Header from "../Header";

class Posts extends Component {
  state={
    posts: null
  }

  componentDidMount() {
      fetch("https://10numaramotivasyon.com/wp-json/wp/v2/posts").then(response => {
        return response.json();
      }).then(data => {
        this.setState({ posts: data })
      })
  }

  render() {
    return (
      <div id="posts">
          <Header pathname={this.props.location.pathname}/>
          <div className="post-container">
          { this.state.posts ?
            this.state.posts.map(post => {
              return (
                <div className="post">
                    <div className="image-container"></div>
                    <div className="title">
                        <h3>{post.title.rendered}</h3>
                    </div>
                    <div className="snippet">
                        {post.excerpt.rendered}
                    </div>
                </div>
              )
            })
            : null}
          </div>
      </div>
    );
  }
}

export default Posts;
