import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker'

class GetHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isEdit: false,
      resForm: {
        option: null,
        extrainfo: ''
      }
    }
  }


  render() {
    return (
      <div class="help">
        <h1>What Do You Want Help With?</h1>
        <div class="options">
        <div class="dropdown">
          <button class="dropbtn">Options</button>
          <div class="dropdown-content">
            <a href="#">Groceries</a>
            <a href="#">Medication Pick Up</a>
            <a href="#">Post Office</a>
            <a href="#">Someone To Talk To!</a>
          </div>
        </div>

          <form>
            <p>Anything else you'd like your volunteer to know?</p>
            <input
              name="extrainfo"
              type="text"
              onChange={this.props.handleChange} />
          <a href="/submit" ><button
            // onClick={(e) => {
            //   this.props.addPost(this.props.match.params.id)
            // }}
          >Submit</button></a>
          </form>
          </div>
      </div>
   
    )
  }
}


export default GetHelp;