import React, { Component } from 'react'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div>

        <nav>
          <div class="header">
              <a href="/decision">
              <img src="images/logo.svg" class="top-logo"/>
            </a>
            {this.props.currentUser
              ?
              <div class="nav">
                
                <nav class="nav">
                  <a class="link" href="/home">Home</a>
                  <a class="link" href="/about">About</a>
                  <a class="link" href="/profile">Profile</a>
                  <a class="link" href="/contact">Contact</a>
                  <button onClick={this.props.handleLogout}>Logout</button>
                </nav>
              </div>
              :
              <a href="/login">Login</a>
            }
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;

