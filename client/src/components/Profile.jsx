import React, {Component} from 'react'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.sate = {
      user: ''
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const user = await this.props.showUser();
    if (user) {
      this.setState({ user })
    }
  }
  

  render() {
    // console.log(this.state.user)
    return (
      <div>
        <h1>Hello User</h1>
        {/* {this.props.user
          &&
          this.props.user.map(name => {
            return (
              
              <div>{name.first_name}</div>
            )
          })
        } */}
        <button onClick={this.props.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default Profile;