import React, { Component } from 'react'

export default class Submit extends Component {
  render() {
    return (
      <div class="main">
        <h1 class="submit-title">Thank you {this.props.getName()}! Your requst has been submitted!</h1>
        <p>One of our volunteers will reach out to you shortly. </p>
      </div>
    )
  }
}
