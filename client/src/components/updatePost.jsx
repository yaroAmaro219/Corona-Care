import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'

 class updatePost extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  componentDidMount() {
    this.props.setPostForm(this.props.personalPost.posts.name, this.props.personalPost.posts.user_id);
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.history.goBack()
  }


   render() {
    console.log(this.props.post.id)
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePost(this.props.post.id)
        }}>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Content"
            type="text"
            name="content"
            value={this.props.content}
            onChange={this.props.handleChange}
          />
          <button>Submit</button>
          <button onClick={this.goBack}>Back</button>
        </form>
      </div>
    )
  }
}

export default withRouter(updatePost)