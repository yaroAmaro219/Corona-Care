import React, { Component } from 'react'

export default class Submit extends Component {
  render() {
    return (
      <div>
        <h1>Thank you {this.props.getName()}! Your requst has been submitted.</h1>
        <p>One of our volunteers will reach out to you shortly. </p> 
      </div>
    )
  }
}
