import React, { Component } from 'react'
import Logo from '../images/CoCare.svg'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    console.log(this.props.user)
    console.log(this.props.currentUser)
    return (
      <div>
        <nav>
          <div class="header">
              <a href="/home">
              <img src={Logo} class="top-logo"/>
            </a>
            {this.props.currentUser
              ?
              <div class="nav">
                <nav class="nav">
                  <a class="link" href="/home">Home</a>
                  <div class="dropdown">
                    <a class="dropbtn" href="#">USA</a>
                      <div class="dropdown-content">
                        <a href="#">Germnay</a>
                        <a href="#">Russia</a>
                        <a href="#">France</a>
                      </div>
                  </div>
                  <a class="link" href="/contact">Contact</a>
                  <a class="link-profile" href="/profile">
                  <svg class="profileimg" width="18" viewBox="0 0 16 18">
                      <path d="M8 0C9.06087 0 10.0783 0.464774 10.8284 1.29208C11.5786 2.11938 12 3.24144 12 4.41143C12 5.58141 11.5786 6.70347 10.8284 7.53078C10.0783 8.35808 9.06087 8.82285 8 8.82285C6.93913 8.82285 5.92172 8.35808 5.17157 7.53078C4.42143 6.70347 4 5.58141 4 4.41143C4 3.24144 4.42143 2.11938 5.17157 1.29208C5.92172 0.464774 6.93913 0 8 0ZM8 11.0286C12.42 11.0286 16 13.0027 16 15.44V17.6457H0V15.44C0 13.0027 3.58 11.0286 8 11.0286Z" fill="black"/>
                  </svg>
                    {this.props.currentUser.first_name}</a>
                  {/* <button onClick={this.props.handleLogout}>Logout</button>  */}
                </nav>
              </div>
              :
              <div class="nav">
                <nav class="nav">
                  <a class="link" href="/home">Home</a>
                  <div class="dropdown">
                    <button class="dropbtn">USA</button>
                      <div class="dropdown-content">
                        <a href="#">Germnay</a>
                        <a href="#">Russia</a>
                        <a href="#">France</a>
                      </div>
                  </div>
                  <a class="link" href="/contact">Contact</a>
                  <a class="link-profile" href="/login">
                  <svg class="profileimg" width="18" viewBox="0 0 16 18">
                      <path d="M8 0C9.06087 0 10.0783 0.464774 10.8284 1.29208C11.5786 2.11938 12 3.24144 12 4.41143C12 5.58141 11.5786 6.70347 10.8284 7.53078C10.0783 8.35808 9.06087 8.82285 8 8.82285C6.93913 8.82285 5.92172 8.35808 5.17157 7.53078C4.42143 6.70347 4 5.58141 4 4.41143C4 3.24144 4.42143 2.11938 5.17157 1.29208C5.92172 0.464774 6.93913 0 8 0ZM8 11.0286C12.42 11.0286 16 13.0027 16 15.44V17.6457H0V15.44C0 13.0027 3.58 11.0286 8 11.0286Z" fill="black"/>
                  </svg>
                  Login</a> 
                </nav>
              </div>
            }
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;

