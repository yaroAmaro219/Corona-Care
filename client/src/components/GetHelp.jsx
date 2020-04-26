import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import { showPost } from '../services/api-helper';

class GetHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isEdit: false,
      name: 'Billy',
      title: '',
      content: '',
      user_id: 37,
      data: '',
    }
  }


  // addPost = () => {
  //   const newPost = this.props.postPost(37, this.state.postForm)
  //   this.setState(prevState =>
  //     ({
  //       data: [...prevState.data, newPost],
  //       name: '',
  //       title: '',
  //       content: '',
  //       user_id: null,
  //     }
  //     ))
  // }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  }

  render() {
    console.log(this.state.title)
    console.log(this.state.content)
    return (
      <div class="help">
        <h1>What Do You Want Help With?</h1>
        <div class="options">
          <button onClick={(e) => this.setState({ title: 'Groceries' })}>Groceries</button>
          <button onClick={(e) => this.setState({ title: 'Medication Pick Up' })}>Medication Pick Up</button>
          <button onClick={(e) => this.setState({ title: 'Post Office' })}>Post Office</button>
          <button onClick={(e) => this.setState({ title: 'Someone To Talk To!' })}>Someone To Talk To!</button>
        </div>

        <form>
          <p>Anything else you'd like your volunteer to know?</p>
          <input
            name="content"
            type="string"
            onChange={this.handleChange} />
          <Link to="/submit"><button
            onClick={(e) => {
              this.props.addPost(
                this.props.match.params.id,
                this.state.name, this.state.title, this.state.content, this.state.user_id)
            }}
          >Submit</button></Link>
        </form>
      </div>
    )
  }
}


export default withRouter(GetHelp);