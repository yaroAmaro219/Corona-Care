import React, { Component } from 'react'

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      location: "",
      radius: "",
      post: null,
    }
  }

  componentDidMount() {
    this.props.getPost();
  }

  render() {
    const post =
      this.props.post
    &&
      this.props.post.map((post, index) => {
      return (
        <div class="post">
          <h1>Hi I'm {post.name}</h1>
          <br />
          <h2>I Need Help With {post.title}</h2>
          <p>Good things to know: {post.content}</p>
        </div>
      )
    })
    return (
      <div>
        
     {post}
      </div>
    )
  }
}
