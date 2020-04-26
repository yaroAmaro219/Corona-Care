import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Link to="decision"><p>Let's get started</p></Link> 
      </div>
    )
  }
}
