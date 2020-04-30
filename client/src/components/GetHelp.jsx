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
      name: '',
      title: '',
      content: '',
      user_id: this.props.match.params.id,
      data: '',
    }
  }

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
      <div class="gethelp-main-container flex row">
        <h1 class="title">I need help with:</h1>
        <div class="gethelp-options">
          <button class="option-submit-button" onClick={(e) => this.setState({ title: 'Groceries' })}>Groceries</button>
          <button class="option-submit-button" onClick={(e) => this.setState({ title: 'Medication Pick Up' })}>Medication Pick Up</button>
          <button class="option-submit-button" onClick={(e) => this.setState({ title: 'Post Office' })}>Post Office</button>
          <button class="option-submit-button" onClick={(e) => this.setState({ title: 'Someone To Talk To!' })}>Someone To Talk To!</button>
        </div >

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
      </div >
    )
  }
}


export default withRouter(GetHelp);