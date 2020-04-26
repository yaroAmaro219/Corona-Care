import React, { Component } from 'react'


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div class="header">
          <a href="/home"><h1>COCA</h1></a>
          {this.props.currentUser
            ?
            <div class="nav">
              <nav class="nav">
                <a class="link" href="/home">Home</a>
                <a class="link" href="/about">About</a>
                <a class="link" href="/service">Service</a>
                <a class="link" href="/profile">Profile</a>
                <a class="link" href="/contact">Contact</a>
              </nav>
              <button onClick={this.props.handleLogout}>Logout</button>
            </div>
            :
            <button onClick={this.props.handleLogin}>Login</button>
            }
            </div>
        </nav>
      </div>
    )
  }
}
  
export default Nav;

